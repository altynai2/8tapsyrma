import React, { useContext, useState } from 'react';
import { NoticeContext } from '../contexts/NoticeContext';
import '../App.css';

const NoticeList = React.memo(() => {
  const { notices, deleteNotice, updateNotice } = useContext(NoticeContext);
  const [editIndex, setEditIndex] = useState(-1);
  const [editText, setEditText] = useState('');

  const handleEdit = (index, text) => {
    setEditIndex(index);
    setEditText(text);
  };

  const handleUpdate = () => {
    updateNotice(editIndex, editText);
    setEditIndex(-1);
    setEditText('');
  };

  return (
    <div>
      <h2>Notices</h2>
      <ul>
        {notices.map((notice, index) => (
          <li key={index}>
            {index === editIndex ? (
              <div>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={handleUpdate}>Update</button>
              </div>
            ) : (
              <div>
                {notice}
                <button onClick={() => handleEdit(index, notice)}>Edit</button>
                <button onClick={() => deleteNotice(index)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default NoticeList;