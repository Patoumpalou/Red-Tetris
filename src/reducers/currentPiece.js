import * as types from '../constants/ActionTypes'
import { getRotatedPieceMap} from '../function'

const currentPiece = (state = [], action) => {
    switch (action.type) {
        case types.INCREMENT_Y:
                console.log(state.shape)
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
                    y: 0,
                    rotation: 0,
                }
            )
        case types.ARROW_LEFT:
            if(state.shape === undefined){
                return {...state}
            }
            let x2 
            if ((state.x - 1) >= 0 ){
                x2 = state.x - 1
            }
            else{
                x2 = state.x
            }
            return({
                ...state,
                x: x2
            })
        case types.ARROW_RIGHT:
            if(state.shape === undefined){
                return {...state}
            }
            let x 
            if ((state.x + 1) <= (10 - state.width)){
                x = state.x + 1
            }
            else{
                x = state.x
            }
            return({
                ...state,
                x: x
            })
        case types.ARROW_DOWN:
            if(state.shape === undefined){
                return {...state}
            }
            return({
                ...state,
                y: state.y + 1
            })
        case types.ARROW_UP:
            if(state.shape === undefined){
                return {...state}
            }
            return({
                ...state,
                piece_grid: getRotatedPieceMap(state.piece_grid),
                width: state.height,
                height: state.width,
                rotation: state.rotation + 90
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