import React from 'react'
import PropTypes from 'prop-types'

import  { AddInput }  from "../containers/AddInput";
import { Chrono } from "../containers/Chrono";

const HomePage = (props) => {
  let homePage = props.homePage

  console.log(props)

  if (homePage.home == undefined){
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
        <AddInput />
      </div>
    )
  }

}

HomePage.propTypes = {}

export default HomePage
