import * as types from '../constants/ActionTypes'
import { get_piece_grid } from '../function'

let nextInputId = 0
let nextPlayerId = 0
let nextPieceId = 1 

//  related to playedpiece reducer and currentPiece reducer
export const pieceIsPlayed = (piece_grid, y, x, shape) => ({
    type: types.PIECE_IS_PLAYED,
    piece_grid,
    y,
    x,
    shape
})
// related to grid reducer
export const initGrid = () => ({
    type: types.INIT_GRID
})
// related to grid reducer
export const updateGrid = (x, y, piece_grid) => ({
    type: types.UPDATE_GRID,
    x,
    y,
    piece_grid

})

// related to currentPiece reducer
export const arrowLeft = () => ({
    type: types.ARROW_LEFT
})
export const arrowRight = () => ({
    type: types.ARROW_RIGHT
})
export const arrowDown = () => ({
    type: types.ARROW_DOWN
})
export const arrowUp = () => ({
    type: types.ARROW_UP
})
export const space = () => ({
    type: types.SPACE
})
// ////////////////////////////////

// related to inputs reducer DELETE ?
export const addInput = (input, player) => ({
    type: types.ADD_INPUT, 
    id: nextInputId++,
    input,
    player
}) 

// related to inputs reducer
export const InputReceived = (input, player) => ({
    type: types.INPUT_RECEIVED,
    id: nextInputId++,
    input,
    player
})

// related to nextPiece reducer
export const addPiece = (shape, state) => ({
    type: types.ADD_PIECE,
    id: nextPieceId++,
    piece_grid: get_piece_grid(shape, nextPieceId),
    shape,
    state
})

// related to nextPIece reducer
export const PieceReceived = (shape, state, piece_grid) => ({
    type: types.PIECE_RECEIVED,
    id: nextPieceId++,
    piece_grid: piece_grid,
    shape,
    state,
    
})

// related to nextPiece and currentPiece reducer
export const sendPieceToGame = (id, shape, state, piece_grid ) => ({
    type: types.SEND_PIECE_TO_GAME,
    id, 
    shape,
    state,
    piece_grid
})

// related to currentPiece reducer
export const incrementY = () => ({
    type: types.INCREMENT_Y
})

// related to time reducer
export const updateTime = value => ({
    type: types.UPDATE_TIME,
    value
})
export const gameOver = () => ({
    type: types.GAME_OVER
})
export const gameStart = () => ({
    type: types.GAME_START
})





// unused yet 
export const addPlayer = name => ({
    type: types.ADD_PLAYER,
    id: nextPlayerId++,
    name
})
export const populatePlayerList = players => ({
    type: types.PLAYERS_LIST,
    players
})

