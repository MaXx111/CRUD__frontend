import { memo } from 'react'

interface NoteItemProps {
    note: {
        id: number,
        content: string 
    },
    onRemove: (id: number) => void;
}

const NoteItem = memo(function NoteItem({note, onRemove}: NoteItemProps) {

    return(
        <>
        <div className="item">
            <img className="item-delete-img" src="delete.png" alt="delete" onClick={() => onRemove(note.id)} />
            <p className="item-text">{note.content}</p>
        </div>
        </>
    )
})

export default NoteItem