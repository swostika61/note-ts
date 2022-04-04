import React, { useRef } from "react";

// interface ICreateNoteProps = {}

function CreateNotes() {
  const titleRef = useRef();
  const textRef = useRef();
  const colorRef = useRef();
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h2 className="text-2xl font-semibold capitalize">CreateNotes</h2>
      <form action="" className="my-2">
        <div className="mb-1">
          <label htmlFor="title" className="capitalize">
            title
          </label>
          <input
            id="title"
            type="text"
            placeholder="enter title for the notes"
          />
        </div>
        <div className="mb-1">
          <label htmlFor="text" className="capitalize">
            text
          </label>
          <textarea
            id="text"
            rows={3}
            placeholder="enter your  notes"
          />
        </div>
        <div className="mb-1">
          <label htmlFor="colorInput" className="capitalize">
            note color
          </label>
          <input
            id="colorInput"
            type="color"
            defaultValue="#dfdfdf"
            placeholder="enter your  notes"
            title="choose a color"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 capitalize text-white font-bold py-2 px-4 rounded-lg"
        >
          submit
        </button>
      </form>
    </div>
  );
}

export default CreateNotes;
