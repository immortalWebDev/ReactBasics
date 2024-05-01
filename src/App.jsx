import React from 'react';
import './App.css';
import StudentManager from './components/StudentManager';
import { StudentContextProvider } from './components/context/StudentContext';

function App() {
  return (
    <div className="App">
      <h1>Student Manager</h1>
      <StudentContextProvider>
        <StudentManager />
      </StudentContextProvider>
    </div>
  );
}

export default App;
