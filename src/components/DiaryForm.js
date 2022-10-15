import React, { useState } from 'react'

export default function DiaryForm({ addItem }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [text, setText] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    let itemObject = {
      title,
      date,
      text
    };

    addItem(itemObject);
    
    setTitle("");
    setDate("");
    setText("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="diary-form">
          <input value={title || ''} className="diary-input" onChange={(event) => setTitle(event.target.value)} placeholder="Add an item" />
          <input type="date" value={date || ''} onChange={(event) => setDate(event.target.value)} className="diary-date-input" />
        </div>
        <textarea rows="2" value={text || ''} className="diary-textarea" onChange={(event) => setText(event.target.value)} />
        <button type="submit" className="diary-button">Add item to diary</button>
      </form>
    </div>
  );
}
