import * as types from '../constants/ActionTypes'

const playedPieces = (state = [], action) => {
    switch (action.type) {
        case types.ADD_PIECE: 
        case types.INPUT_RECEIVED: 
            return state.concat([
                {
                    shape: action.shape,
                    state: action.state,
                    position: action.position,
                    id: action.id
                }
            ])
        default:
            return state
    }
}

export default playedPieces