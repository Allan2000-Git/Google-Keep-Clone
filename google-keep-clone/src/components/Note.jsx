import { Box, Button, CardActions, CardContent, IconButton, Typography } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import { useNotesContext } from '../contexts/NotesContext';

const Note = ({note}) => {

    const { notes, setNotes, setArchiveNotes, setDeletedNotes } = useNotesContext()

    const archiveNote = (note) =>{
        const newNotes = notes.filter(item => item.id !== note.id)
        setNotes(newNotes)
        setArchiveNotes(prev =>[...prev, note])
    }

    const deletedNote = (note) =>{
        const newNotes = notes.filter(item => item.id !== note.id)
        setNotes(newNotes)
        setDeletedNotes(prev =>[...prev, note])
    }

    return (
        <>
        <Card sx={{ width: 250, border:"1px solid #e0e0e0", borderRadius:"10px", boxShadow:"none" }}>
            <CardContent>
                <Typography sx={{ fontSize: 14, fontWeight: 600, color:"#202124" }}>{note.title}</Typography>
                <Typography sx={{fontWeight: 400, color:"#202124", textAlign:"justify", marginTop:"10px"}} >{note.description}</Typography>
                <br />
            </CardContent>
            <CardActions>
                <IconButton onClick={()=>archiveNote(note)} style={{marginLeft:"auto"}}><ArchiveOutlinedIcon style={{fontSize:"20px", color:"#202124"}} /></IconButton>
                <IconButton onClick={()=>deletedNote(note)} ><DeleteOutlinedIcon style={{fontSize:"20px", color:"#202124"}} /></IconButton>
            </CardActions>
        </Card>
        </>
    )
}

export default Note
