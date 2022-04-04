import React from "react";
import Notes from "./Notes";
interface INoteList{
  notes: INote[];
  setNotes:React.Dispatch<React.SetStateAction<INote[]>>
}
const NotesList: React.FC<INoteList> = ({ notes,setNotes }) => {
  const handleDelete = (id: string) => {
    setNotes(notes.filter(note=>note.id!==id))
  }
  return (
    <div className="grid sm:grid-cols-3 gap-2	">
      {notes.map(note => {
        return <Notes key={note.id} note={note} handleDelete={ handleDelete}/>
      })}
    </div>
  )
}

export default NotesList