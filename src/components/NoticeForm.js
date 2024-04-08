import React, { useState, useContext } from 'react';
import { NoticeContext } from '../contexts/NoticeContext';
import '../App.css';

const NoticeForm = () => {
  const [text, setText] = useState('');
  const { addNotice } = useContext(NoticeContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addNotice(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter notice..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add Notice</button>
    </form>
  );
};

export default NoticeForm;

