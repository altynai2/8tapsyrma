import React, { Suspense } from 'react';
import './App.css';
import NoticeContextProvider from './contexts/NoticeContext';
import NoticeForm from './components/NoticeForm';
const NoticeList = React.lazy(() => import('./components/NoticeList'));


function App() {
  return (
    <div className="App">
      <h1>Notice Board App</h1>
      <NoticeContextProvider>
        <NoticeForm />
        <Suspense fallback={<div>Loading...</div>}>
          <NoticeList />
        </Suspense>
      </NoticeContextProvider>
    </div>
  );
}

export default App;
