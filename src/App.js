import React, { Component } from 'react';
import './App.css';
import './Tools.css';
import  NextTetris  from "./containers/NextTetris";
import  TetrisGame  from "./containers/TetrisGame";
import  Sidebar  from "./containers/Sidebar";

function App() {
  return (
    <div className="App">
        <div className=" flex-row-center max-width">
          <h1 className="title">Red Tetris</h1>
        </div>
        <div className="container">
          <div className="flex-column-center" id="left-container">
            <NextTetris />
            <TetrisGame />
          </div>
          <Sidebar />
        </div>
    </div>
  );
}

export default App;
