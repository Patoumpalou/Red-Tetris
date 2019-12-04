import * as types from '../constants/ActionTypes'
import { get_piece_grid } from '../function'

const grid = (state = [], action) => {
    switch (action.type) {
        case types.INIT_GRID: 
            return (
                {
                    array: [
                        [0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0]
                    ]
                }
            )
        case types.UPDATE_GRID:
            // console.log(action.y)
            state.array[0][0] = action.y
            let piece_grid = action.piece_grid
            let piece_height = piece_grid.length
            let piece_width = piece_grid[0].length
            let square_coords = []
            let piece_shape
            let old_position = []
      
            // tu prend les coords des cases remplies de piece_grid
            for(var y = 0; y < piece_height; y++){
                for(var x = 0; x < piece_width; x++){
                    if (piece_grid[y][x] !== 0){
                        piece_shape = piece_grid[y][x]
                        square_coords.push([y, x])
                    }
                }
            }
            
            // tu effaces la piece avec ses anciennes coords
            if (state.old_position !== undefined){
                state.old_position.forEach(element => {
                    let tmp_y = element[0]
                    let tmp_x = element[1]
                    if(state.array[tmp_y] !== undefined && state.array[tmp_y][tmp_x] !== undefined){
                        state.array[tmp_y][tmp_x] = 0
                    }
                });
            }

            // tu modif ces coords et les ajoute au tab
            square_coords.forEach(coords => {
                
                let tmp_y = coords[0] + action.y
                let tmp_x = coords[1] + action.x
                if(state.array[tmp_y] !== undefined && state.array[tmp_y][tmp_x] !== undefined){
                    state.array[tmp_y][tmp_x] = piece_shape
                    old_position.push([tmp_y, tmp_x])
                }
            })
            return ({
                array: state.array,
                piece_shape: piece_shape,
                piece_y: action.y,
                piece_x: action.x,
                old_position
            })
        default:
            return state
    }
}

export default grid