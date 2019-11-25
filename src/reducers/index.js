import { combineReducers } from "redux"
import inputs from './inputs'
import players from "./players"
import time from "./time"
import waitingPieces from "./waitingPieces"
import currentPiece from "./currentPiece"
import playedPieces from "./playedPieces"

const test = combineReducers({
    waitingPieces,
    inputs, 
    players,
    time,
    playedPieces, 
    currentPiece
})

export default test