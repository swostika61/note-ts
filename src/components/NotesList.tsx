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
    <div>
      <h1 className="leading-8 text-3xl text-lime-800	font-semibold">Notes</h1>
      {notes.map(note => {
        return <Notes key={note.id} note={note} handleDelete={ handleDelete}/>
      })}
    </div>
  )
}

export default NotesList