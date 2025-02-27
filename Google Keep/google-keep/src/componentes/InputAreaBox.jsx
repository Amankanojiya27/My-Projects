import React, { useState } from "react";

const InputAreaBox = () => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputText, setInputText] = useState("");
  const [notes, setNotes] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [tempData, settempData] = useState(null);

  const addData = (event) => {
    event.preventDefault();
    if (inputTitle && inputText) {
      if (isEditing) {
        const updatedNotes = notes.map((note, index) => {
          if (index === tempData) {
            return { title: inputTitle, text: inputText };
          }
          return note;
        });
        setNotes(updatedNotes);
        setIsEditing(false);
        settempData(null);
      } else {
        const newNote = { title: inputTitle, text: inputText };
        setNotes([...notes, newNote]);
      }
      setInputTitle("");
      setInputText("");
    }
  };

  const editNote = (index) => {
    const noteToEdit = notes[index];
    setInputTitle(noteToEdit.title);
    setInputText(noteToEdit.text);
    setIsEditing(true);
    settempData(index);
  };


  function deleteButton(index){
setNotes((pre)=> {
  return [...pre.filter((_, i)=> i!== index)]
})
  }
  return (
    <div>
      <form onSubmit={addData}>
        <input
          type="text"
          placeholder="Title"
          className="title"
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
        />
        <textarea
          placeholder="Take a note..."
          className="content"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button className="addbutton" type="submit">
          {isEditing ? "Update" : "Add"}
        </button>
      </form>
      <div>
        {notes.map((note, index) => (
          <div className="notes" key={index}>
            <h1>{note.title}</h1>
            <p>{note.text}</p>
            <button onClick={() => editNote(index)}>Edit</button>
            <button onClick={() => deleteButton(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InputAreaBox;