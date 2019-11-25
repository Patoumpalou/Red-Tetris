import * as types from '../constants/ActionTypes'

let nextInputId = 0
let nextPlayerId = 0
let nextPieceId = 0 

export const addInput = (input, player) => ({
    type: types.ADD_INPUT, 
    id: nextInputId++,
    input,
    player
}) 

export const addPiece = (shape, state, position) => ({
    type: types.ADD_PIECE,
    id: nextPieceId++,
    shape,
    state,
    position
})

export const sendPieceToGame = (id, shape, state, position) => ({
    type: types.SEND_PIECE_TO_GAME,
    id, 
    shape,
    state,
    position
})

export const incrementY = () => ({
    type: types.INCREMENT_Y
})

export const InputReceived = (input, player) => ({
    type: types.INPUT_RECEIVED,
    id: nextInputId++,
    input,
    player
})

export const PieceReceived = (shape, state, position) => ({
    type: types.PIECE_RECEIVED,
    id: nextPieceId++,
    shape,
    state,
    position
})

export const updateTime = value => ({
    type: types.UPDATE_TIME,
    value
})

export const addPlayer = name => ({
    type: types.ADD_PLAYER,
    id: nextPlayerId++,
    name
})
export const populatePlayerList = players => ({
    type: types.PLAYERS_LIST,
    players
})

