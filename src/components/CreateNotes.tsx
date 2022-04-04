import React, { useRef, useState } from "react";

interface ICreateNoteProps {
  notes: INote[];
  setNotes: React.Dispatch<React.SetStateAction<INote[]>>;
}

const CreateNotes: React.FC<ICreateNoteProps> = ({ notes, setNotes }) => {
  // error
  const [error, setError] = useState<string>("");
  // ref
  const titleRef = useRef<HTMLInputElement | null>(null);
  const textRef = useRef<HTMLTextAreaElement | null>(null);
  const colorRef = useRef<HTMLInputElement | null>(null);
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (titleRef.current?.value === "" || textRef.current?.value === "") {
      return setError("all fields are mandatory");
    }
    setNotes([
      ...notes,
      {
        id: new Date().toString(),
        title: (titleRef.current as HTMLInputElement).value,
        text: (textRef.current as HTMLTextAreaElement).value,
        bgcolor: (colorRef.current as HTMLInputElement).value,
        date: new Date().toString(),
      },
    ]);
    setError("");
    (titleRef.current as HTMLInputElement).value = "";
    (textRef.current as HTMLTextAreaElement).value = "";
  };
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h2 className="text-2xl font-semibold capitalize text-indigo-400 ">
        CreateNotes
      </h2>
      {error && alert(error)}
      {/* form  */}
      <form
        action=""
        className="my-2 w-9/12 sm:w-6/12	"
        onSubmit={(e) => handleFormSubmit(e)}
      >
        <div className="mb-5 ">
          <label
            htmlFor="title"
            className="capitalize block text-xl font-semibold mb-1"
          >
            title
          </label>
          <input
            id="title"
            ref={titleRef}
            type="text"
            className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600  font-normal dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="enter title for the notes"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="text"
            className="capitalize block text-xl font-semibold mb-1 "
          >
            text
          </label>
          <textarea
            ref={textRef}
            className="form-control
        block
        w-full
        px-3
        py-1.5
        text-xl
        font-normal
        text-gray-900
        bg-white bg-clip-padding
        border border-solid border-gray-600
        rounded
        resize-none
        m-0
        focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="text"
            rows={3}
            placeholder="enter your  notes"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="colorInput"
            className=" capitalize block text-xl font-semibold mb-1"
          >
            note color
          </label>
          <input
            id="colorInput"
            type="color"
            className="w-7"
            ref={colorRef}
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
};

export default CreateNotes;
