import { createContext, useContext, useState } from "react";

const NotesContext = createContext()

export const NotesContextProvider = ({children}) =>{

    const [notes, setNotes] = useState([])
    const [archiveNotes, setArchiveNotes] = useState([])
    const [deletedNotes, setDeletedNotes] = useState([])

    return(
        <NotesContext.Provider value={{notes, setNotes, archiveNotes, setArchiveNotes, deletedNotes, setDeletedNotes}}>
            {children}
        </NotesContext.Provider>
    )
}

export const useNotesContext = () =>{
    return useContext(NotesContext)
}