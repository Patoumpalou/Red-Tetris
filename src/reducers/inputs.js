import * as types from '../constants/ActionTypes'

const inputs = (state = [], action) => {
    switch (action.type) {
        case types.ADD_INPUT: 
        case types.INPUT_RECEIVED: 
        console.log(state)
            return state.concat([
                {
                    input: action.input,
                    player: action.player,
                    id: action.id
                }
            ])
        default:
            return state
    }
}

export default inputs