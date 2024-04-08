import React from 'react';
import './App.css';
import { HeaderBE } from './components/Header/HeaderBE';
import { Navbar } from './components/Nav/Navbar';
import { BodySup } from './components/Body/Body';

function App() {
  return (
    <div className='App'>
      <Navbar />
      {/* Incluir Header aqui */}
      <HeaderBE />
      {/* Incluir Main aqui */}
      <BodySup />
      {/* Incluir Sections aqui */}
    </div>
  );
}

export default App;
