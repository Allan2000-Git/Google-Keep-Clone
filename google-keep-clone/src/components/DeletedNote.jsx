import { Box, Button, CardActions, CardContent, IconButton, Typography } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useNotesContext } from '../contexts/NotesContext';

const DeletedNote = ({note}) => {

    const { notes, setNotes, archiveNotes, setArchiveNotes, deletedNotes, setDeletedNotes } = useNotesContext()

    const restoreNote = (note) =>{
        const newNotes = deletedNotes.filter(item => item.id !== note.id)
        setDeletedNotes(newNotes)
        setNotes(prev =>[...prev, note])
    }

    const deletedNote = (note) =>{
        const newNotes = deletedNotes.filter(item => item.id !== note.id)
        setDeletedNotes(newNotes)
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
                <IconButton onClick={()=>restoreNote(note)} style={{marginLeft:"auto"}}><RestoreFromTrashIcon style={{fontSize:"20px", color:"#202124"}} /></IconButton>
                <IconButton onClick={()=>deletedNote(note)} ><DeleteForeverIcon style={{fontSize:"20px", color:"#202124"}} /></IconButton>
            </CardActions>
        </Card>
        </>
    )
}

export default DeletedNote
