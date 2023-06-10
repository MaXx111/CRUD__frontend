import FormCRUD from './form-crud'
import NotesList from './notes-list'
import { useCallback, useEffect, useState } from 'react'

function CRUD() {

    const [note, setNote] = useState([]);

    const [reset, setReset] = useState(0)

    useEffect( () => {
        const fetchNotes = async () => {
            const response = await fetch('https://crud-backend-er3n.onrender.com/notes')

            const notes = await response.json()

            setNote(notes)
        }

        fetchNotes();

    },[reset])

    const resetHandler = useCallback(() => {
        setReset(reset + 1)

    },[note])


    const submitHandler = useCallback(async (text: string) => {
        let note = {
            id: 0,
            content: text
        }

        await fetch('https://crud-backend-er3n.onrender.com/notes', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(note)
          });
        
        resetHandler();
    },[note])

    const removeHandler =  useCallback(async (id: number) => {
        await fetch(`https://crud-backend-er3n.onrender.com/notes/${id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(note)
          });

        await resetHandler();

    },[note])

    
    return (
        <>
            <div className="header">
                <h1 className="title-notes">Notes</h1>
                <img src="reset.png" alt="reset" className="reset-btn" onClick={resetHandler}/>
            </div>

            <NotesList notes={note} onRemove={removeHandler} />

            <FormCRUD onSubmit={submitHandler}/>
        </>
    )
}

export default CRUD