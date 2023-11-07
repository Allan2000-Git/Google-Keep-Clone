import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Form from './Form'
import Note from './Note'
import { useNotesContext } from '../contexts/NotesContext'
import EmptyNotes from './EmptyNotes'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
};

const Notes = () => {   

    const { notes, setNotes } = useNotesContext()
    console.log(notes);

    const onDragEnd = (result) => {
        if (!result.destination) 
            return;
    
        const items = reorder(notes, result.source.index, result.destination.index);    
        setNotes(items);
    }

    return (
        <>
        <Box display="flex" flexDirection="column" paddingTop="60px">
            <Form/>
            <Box marginTop="40px" sx={{ flexGrow: 1 }}>
            {
                notes.length > 0?
                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId="droppable">
                    {(provided, snapshot) => (
                    <Grid container gap="20px"  
                    {...provided.droppableProps}
                    ref={provided.innerRef}>
                    {
                        notes.map((note, index) =>{
                            return(
                                <Draggable key={note.id} draggableId={note.id} index={index}>
                                    {(provided, snapshot) => (
                                    <Grid item key={note.id}
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}>
                                        <Note note={note} />
                                    </Grid>
                                    )}
                                </Draggable>
                            )
                        })
                    }
                    </Grid>
                    )}
                    </Droppable>
                </DragDropContext>
                :<EmptyNotes/>

            }
            
            </Box>
            </Box>
        </>
    )
}

export default Notes
