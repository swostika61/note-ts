import React from "react";
interface INotes {
  note: INote;
  handleDelete:(id:string)=>void
}
const Notes: React.FC<INotes> = ({ note,handleDelete }) => {

  return (
    // card component
    <div
      className="max-w-md py-4 px-8 border bg-white shadow-lg rounded-lg my-6"
      style={{ backgroundColor: note.bgcolor }}
    >
      <div>
        <h2 className="text-gray-900 text-2xl font-semibold capitalize">
          {note.title}
        </h2>
        <p className="mt-2 text-gray-700 text-base mb-2">{note.text}</p>
        <p className="text-gray-400 leading-none">{note.date}</p>
      </div>
      <div className="flex justify-end mt-4">
        <button
          onClick={()=>handleDelete(note.id)}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Notes;
