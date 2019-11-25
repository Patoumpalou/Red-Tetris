import React, { Component } from 'react';
// import './App.css';
// import './Tools.css';
import './css';
import  NextTetris  from "./containers/NextPiece";
import  { AddInput }  from "./containers/AddInput";
import  { Game }  from "./containers/Game";
import  Sidebar  from "./containers/Sidebar";

class App extends Component {
  render() {
    return (
      <div>
          <div className=" flex-row-center max-width">
            <h1 className="title">Red Tetris</h1>
          </div>
          <AddInput />
        
      </div>
    );
  }
 
}

export default App;
