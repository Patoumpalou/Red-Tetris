import * as types from '../constants/ActionTypes'

const currentPiece = (state = [], action) => {
    switch (action.type) {
        case types.INCREMENT_Y:
                // console.log(state.y)
            if(state.y < (20 - (state.height))){
               
                return(
                    {
                        ...state,
                        y: state.y + 1
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
        case types.ARROW_LEFT:
            return({
                ...state,
                x: state.x - 1
            })
        case types.ARROW_RIGHT:
            return({
                ...state,
                x: state.x + 1
            })
        case types.ARROW_DOWN:
            return({
                ...state,
                y: state.y + 1
                
            })
        case types.ARROW_UP:
            return({
                ...state
            })
        case types.SPACE:
            return({
                ...state
            })
        default:
            return state
    }
}

export default currentPiece