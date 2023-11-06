import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { useNotesContext } from '../contexts/NotesContext'
import DeletedNote from '../components/DeletedNote'

const DeletedNotes = () => {

    const { deletedNotes } = useNotesContext()

    return (
        <>
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="left">
            <Box marginTop="40px" sx={{ flexGrow: 1 }} >
            <Grid container gap="20px"  style={{marginTop:"20px", display:"flex", alignItems:"left"}}>
            {
                deletedNotes.map((note) =>{
                    return(
                        <Grid item key={note.id}>
                            <DeletedNote note={note} />
                        </Grid>
                    )
                })
            }
            </Grid>
            </Box>
        </Box>
        </>
    )
}

export default DeletedNotes
