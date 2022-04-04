import React, { useState } from "react";
import "./App.css";
import CreateNotes from "./components/CreateNotes";
import Header from "./components/Header";
import NotesList from "./components/NotesList";

function App() {
  const [notes, setNotes] = useState<INote[]>([
    {
      id: new Date().toString(),
      title: "swostika",
      text: "meeting at 11 AM",
      bgcolor: "#EDEEC0",
      date: new Date().toString(),
    },
  ]);
  return (
    <>
      <Header />
      <h1 className="leading-8 text-3xl text-lime-800	font-semibold ml-4 mt-2">Notes</h1>
      <div className="containe p-4 grid sm:grid-cols-3">
        <NotesList notes={notes} setNotes={setNotes} />
      </div>
      <CreateNotes />
    </>
  );
}

export default App;
