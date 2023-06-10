import NoteItem from './note-item'
import { memo } from 'react'

interface NotesListProps {
    notes: {
        id: number,
        content: string 
    }[],
    onRemove: any
}

const NotesList = memo(function NotesList({notes, onRemove}: NotesListProps) {

    return (
        <div className="notes-list">
            {notes.map(item => {
                return <NoteItem key={item.id} note={item} onRemove={onRemove}/>
            })}
        </div>
    )
})

export default NotesList