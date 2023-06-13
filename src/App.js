import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Body from './components/Body';
import { DndProvider } from "react-dnd"
import { HTML5Backend } from 'react-dnd-html5-backend'

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
