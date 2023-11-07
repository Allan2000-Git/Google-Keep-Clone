import styled from '@emotion/styled'
import { Box, TextField } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import { useNotesContext } from '../contexts/NotesContext';

import {v4 as uuid} from "uuid"

const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    margin: auto;
    box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%);
    border-color: #e0e0e0;
    width: 600px;
    border-radius: 8px;
    min-height: 30px;
    padding: 10px 15px;
`

const note={
    id:'',
    title:'',
    description:''
}

const Form = () => {

    const [showTextField, setShowTextField] = useState(false)
    const [newNote, setNewNote] = useState({...note, id: uuid()})

    const containerRef = useRef();

    const { notes, setNotes } = useNotesContext()

    const handleOpen = () =>{
        setShowTextField(true)
        containerRef.current.style.minheight = "70px"
    }

    const handleClickAway = () =>{
        setShowTextField(false)

        
        if(newNote.title || newNote.description){
            setNotes((prev)=>[...prev, newNote])
        }
        setNewNote({...note, id: uuid()})
    }

    return (
        <>
        <ClickAwayListener onClickAway={handleClickAway}>
            <Container ref={containerRef}>
                {
                    showTextField && 
                    <TextField onChange={(e)=>setNewNote({...newNote, title: e.target.value})} value={newNote.title} style={{ marginBottom: 10, fontWeight: "bold" }} placeholder="Title" id="title" variant="standard" InputProps={{disableUnderline: true}} />
                }
                <TextField onChange={(e)=>setNewNote({...newNote, description: e.target.value})} value={newNote.description} onClick={handleOpen} multiline placeholder="Take a note..." id="description" variant="standard" InputProps={{disableUnderline: true}} />
            </Container>
        </ClickAwayListener>
        </>
    )
}

export default Form
