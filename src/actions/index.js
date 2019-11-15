import * as types from '../constants/ActionTypes'

let nextInputId = 0
const nextPlayerId = 0

export const sendInput = (input, player) => ({
    type: types.ADD_INPUT, 
    id: nextInputId++,
    input,
    player
}) 

export const addPlayer = name => ({
    type: types.ADD_USER,
    id: nextPlayerId++,
    name
})

export const InputReceived = (input, player) => ({
    type: types.INPUT_RECEIVED,
    id: nextInputId++,
    input,
    player
})

export const populatePlayerList = players => ({
    type: types.PLAYERS_LIST,
    players
})