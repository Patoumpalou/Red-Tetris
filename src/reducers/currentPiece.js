import * as types from '../constants/ActionTypes'

const currentPiece = (state = [], action) => {
    switch (action.type) {
        case types.INCREMENT_Y:
            return(
                {
                    ...state,
                    y: state.y + 1,
                }
            )
        case types.SEND_PIECE_TO_GAME: 
            return (
                {
                    shape: action.shape,
                    state: action.state,
                    position: action.position,
                    id: action.id,
                    x: 4,
                    y: 0
                }
            )
        default:
            return state
    }
}

export default currentPiece