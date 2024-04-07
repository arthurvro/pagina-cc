import React from 'react';
import './App.css';
import { HeaderBE } from './components/Header/HeaderBE';
import { Navbar } from './components/Nav/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <HeaderBE />
      <div className="main-content">
        <h1>What is Lorem Ipsum?</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse expedita consequatur ratione voluptatem debitis saepe quaerat porro, impedit ipsa explicabo voluptatum corporis numquam possimus, eveniet accusantium eaque! Vero, quae ab!</p>
      </div>
    </div>
  );
}

export default App;
