import React from 'react'
import LeftDrawer from '../components/LeftDrawer'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Notes from '../components/Notes'
import ArchiveNotes from './ArchiveNotes'
import DeletedNotes from './DeletedNotes'
import { Box } from '@mui/material'

const Home = () => {
    return (
        <>
        <Box style={{ display: "flex", width: "100%", padding:"20px" }}>
            <BrowserRouter>
                <LeftDrawer/>
                <Routes>
                    <Route path="/" element={<Notes/>} />
                    <Route path="/archive" element={<ArchiveNotes/>} />
                    <Route path="/trash" element={<DeletedNotes/>} />
                </Routes>
            </BrowserRouter>
            </Box>
        </>
    )
}

export default Home
