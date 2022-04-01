import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import NotesList from "./components/NotesList";

function App() {
  const [notes, setNotes] = useState<INote[]>([
    {
      id:( new Date()).toString(),
      title: "swostika",
      text: "meeting at 11 AM",
      bgcolor:"#EDEEC0",
      date:( new Date()).toString(),
    },
  ]);
  return (
    <>
      <Header />
      <div className="containe p-4">
        <NotesList notes={notes} setNotes={setNotes }/>
      </div>
    </>
  );
}

export default App;
