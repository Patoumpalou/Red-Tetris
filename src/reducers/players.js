import * as types from '../constants/ActionTypes'

const players = (state = [], action) => {
    switch (action.type) {
        case types.ADD_PLAYER:
            return state.concat([
                {name: action.name, id: action.id}
            ]) 
        case types.PLAYERS_LIST: 
            return action.users
        default:
            return state
    }
}

export default players