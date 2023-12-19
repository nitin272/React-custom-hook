import React from 'react';
import Store from './Store';
import './App.css';

function App() {
  const [content, setContent] = Store('content', '');

  return (
    <div>
      <input type="text" value={content} onChange={(e) => setContent(e.target.value)} />
    </div>
  );
}

export default App;
