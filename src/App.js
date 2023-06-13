import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Body from './components/Body';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <Body></Body>
    </>
  );
}

export default App;
