import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import { Link } from 'react-router-dom';

const drawerWidth = 300;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar)`
    z-index: 1201;
    background-color: #fff;
    box-shadow: inset 0 -1px 0 0 #dadce0;
    display: flex;
    justify-content: center;
`;

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme), borderWidth: 0
        }),
    }),
);

const LeftDrawer = () => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);

    const handleDrawerOpenClose = () => {
        setOpen(prev => !prev)
    };

    const logo = "https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"

    const navList = [
        {
            id: 1, name: "Notes", icon: <LightbulbOutlinedIcon/>, path:"/"
        },
        {
            id: 2, name: "Archive", icon: <ArchiveOutlinedIcon/>, path:"/archive"
        },
        {
            id: 3, name: "Bin", icon: <DeleteOutlinedIcon/>, path:"/trash"
        }
    ]

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar open={open}>
                <Toolbar>
                <IconButton
                    color="#5f6368"
                    aria-label="open drawer"
                    onClick={handleDrawerOpenClose}
                    edge="start"
                    sx={{
                    marginRight: "10px",
                    }}
                >
                    <MenuIcon />
                </IconButton>
                <img style={{width:"40px", marginRight:"10px"}} src={logo} alt="Google Keep logo" />
                <Typography color="#5f6368" variant="h6" noWrap component="div">
                    Google Keep Clone
                </Typography>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader></DrawerHeader>
                <List>
                {navList.map((item) => (
                    <ListItem key={item.id} disablePadding sx={{ display: "block"}}>
                    <Link to={item.path} style={{ textDecoration: 'none', display: 'flex', color: 'inherit'}}>
                    <ListItemButton
                        sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 2.5,
                        borderTopRightRadius: open ? "50px" : "0px",
                        borderBottomRightRadius: open ? "50px" : "0px",
                        marginTop:"5px",
                        "&:hover":{
                            bgcolor:"#feefc3"
                        },
                        }}
                    >
                        <ListItemIcon
                        sx={{
                            minWidth: 0,
                            mr: open ? 3 : 'auto',
                            justifyContent: 'center',
                        }}
                        >
                        {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.name} sx={{ opacity: open ? 1 : 0 , color:"#202124"}} />
                    </ListItemButton>
                    </Link>
                    </ListItem>
                ))}
                </List>
            </Drawer>
            {/* <Box sx={{ flexGrow: 1 }}>
                <DrawerHeader />
                <Notes/>
            </Box> */}
        </Box>
    );
}

export default LeftDrawer