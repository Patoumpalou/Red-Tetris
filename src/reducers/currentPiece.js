import * as types from '../constants/ActionTypes'

const currentPiece = (state = [], action) => {
    switch (action.type) {
        case types.INCREMENT_Y:
                // console.log(state.y)
            if(state.y < (20 - (state.height))){
               
                return(
                    {
                        ...state,
                        old_y: state.y,
                        y: state.y + 1,
                        
                        
                    }
                )
            }
            return state
            
        case types.SEND_PIECE_TO_GAME: 
            return (
                {
                    shape: action.shape,
                    state: action.state,
                    piece_grid: action.piece_grid,
                    height: action.piece_grid.length,
                    width: action.piece_grid[0].length,
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