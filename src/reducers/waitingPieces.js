import * as types from '../constants/ActionTypes'

const waitingPieces = (state = [], action) => {
    switch (action.type) {
        case types.ADD_PIECE: 
        case types.PIECE_RECEIVED: 
            return state.concat([
                {
                    shape: action.shape,
                    state: action.state,
                    position: action.position,
                    id: action.id
                }
            ])
        case types.SEND_PIECE_TO_GAME:
            console.log('huhu')
            return state.splice(1, 2)
            // supprimer lelement du state
            // peut etre en ajouter un
        default:
            return state
    }
}

export default waitingPieces