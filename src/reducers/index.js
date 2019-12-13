import { combineReducers} from "redux"
import inputs from './inputs'
import players from "./players"
import time from "./time"
import waitingPieces from "./waitingPieces"
import currentPiece from "./currentPiece"
import playedPieces from "./playedPieces"
import grid from './grid'
import homePage from './homepage'

const test = combineReducers({
    waitingPieces,
    inputs,
    players,
    time,
    playedPieces,
    currentPiece,
    grid,
    homePage
})

export default test
