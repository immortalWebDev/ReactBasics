import React from 'react';
import './App.css';
import BlogManager from './components/BlogManager';
import { BlogContextProvider } from './components/context/BlogContextProvider';

function App() {
  return (
    <div className="App">
      <h1>Blog Manager</h1>
      <BlogContextProvider>
        <BlogManager />
      </BlogContextProvider>
    </div>
  );
}

export default App;
