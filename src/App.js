import React from 'react';
import './App.css';
import './Tools.css';

function App() {
  return (
    <div className="App">
        <div className=" flex-row-center max-width">
          <h1 className="title">Red Tetris</h1>
        </div>
        <div className="container">
          <div className="flex-column-center" id="left-container">
            <div className="flex-row-around" id="next-tetris-box">

            </div>
            <div className="" id="tetris-game-box">

            </div>
          </div>
          <div className="flex-column-center" id="sidebar">

          </div>
        </div>
    </div>
  );
}

export default App;
