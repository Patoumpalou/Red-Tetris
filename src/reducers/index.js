import { combineReducers} from "redux"
import players from "./players"
import time from "./time"
import waitingPieces from "./waitingPieces"
import currentPiece from "./currentPiece"
import grid from './grid'
import homePage from './homepage'

const test = combineReducers({
    waitingPieces,
    players,
    time,
    currentPiece,
    grid,
    homePage
})

export default test
