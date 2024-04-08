import React, { createContext, useState } from 'react';

export const NoticeContext = createContext();

const NoticeContextProvider = ({ children }) => {
  const [notices, setNotices] = useState([]);

  const addNotice = (text) => {
    setNotices([...notices, text]);
  };

  const updateNotice = (index, newText) => {
    const newNotices = [...notices];
    newNotices[index] = newText;
    setNotices(newNotices);
  };

  const deleteNotice = (index) => {
    const newNotices = [...notices];
    newNotices.splice(index, 1);
    setNotices(newNotices);
  };

  return (
    <NoticeContext.Provider value={{ notices, addNotice, updateNotice, deleteNotice }}>
      {children}
    </NoticeContext.Provider>
  );
};

export default NoticeContextProvider;
