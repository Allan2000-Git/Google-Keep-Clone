import { Box, Typography } from '@mui/material'
import React from 'react'
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';

const EmptyNotes = () => {
    return (
        <>
            <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" marginTop="6.25%">
                <LightbulbOutlinedIcon style={{fontSize:"120px", color:"#e0e0e0"}}/>   
                <Typography variant="h5" sx={{fontWeight: 400, color:"#5f6368", marginTop:"20px"}} >Notes you add appear here</Typography>
            </Box>
        </>
    )
}

export default EmptyNotes
