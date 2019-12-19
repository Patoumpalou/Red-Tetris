import React from 'react'
import PropTypes from 'prop-types'
import { NextPiece }  from "../containers/NextPiece";
import { Game }  from "../containers/Game";
import { Sidebar }  from "../containers/Sidebar";
import { UpdateGrid }  from "../containers/UpdateGrid";
import  { AddInput }  from "../containers/AddInput";
import { Chrono } from "../containers/Chrono";

const HomePage = (props) => {
  let homePage = props.homePage

  console.log(props)

  if (homePage.home != undefined){
    return (
      <div id="home">
        <h1>Welcome - Let's play redTetris</h1>
        <button onClick = { props.onHome }>launch game</button>
      </div>
    )
  }
  else {
    return (
      <div className="">
        <Chrono />
        <section id="cc">
          <div className="container">
            <AddInput/>
            <section className="flex-column-center" id="left-container">
              <UpdateGrid />
              <NextPiece />
              <Game />
            </section>
            <Sidebar />
          </div>
        </section>
      </div>
    )
  }

}

HomePage.propTypes = {}

export default HomePage
