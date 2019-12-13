import React, { Component } from 'react';
// import './App.css';
// import './Tools.css';
import './css';

import { HomePage } from "./containers/HomePage";

class App extends Component {
  render() {
    return (
      <div>
          {/* <div className=" flex-row-center max-width">
            <h1 className="title">Red Tetris</h1>
          </div> */}
          <HomePage />

      </div>
    );
  }

}

export default App;
