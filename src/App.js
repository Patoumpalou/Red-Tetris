import React, { Component } from 'react';
// import './App.css';
// import './Tools.css';
import './css';

import  { AddInput }  from "./containers/AddInput";
import { Chrono } from "./containers/Chrono";

class App extends Component {
  render() {
    return (
      <div>
          <div className=" flex-row-center max-width">
            <h1 className="title">Red Tetris</h1>
          </div>
          <Chrono />
          <AddInput />
        
      </div>
    );
  }
 
}

export default App;
