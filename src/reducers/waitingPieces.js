import * as types from '../constants/ActionTypes'


const waitingPieces = (state = [], action) => {
    switch (action.type) {
        case types.ADD_PIECE: 
        case types.PIECE_RECEIVED: 
            return state.concat([
                {
                    shape: action.shape,
                    state: action.state,
                    id: action.id,
                    piece_grid: action.piece_grid
                }
            ])
        case types.SEND_PIECE_TO_GAME:
            return state.splice(1, 2)
        default:
            return state
    }
}

export default waitingPieces