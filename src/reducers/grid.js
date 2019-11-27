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
            // let grid = state.array
            state.array[0][0] = action.y
            // console.log(state.array)
            // console.log('y= '+action.y)
            let piece_grid = action.piece_grid
            let piece_height = piece_grid.length
            let piece_width = piece_grid[0].length
            let piece_coords = []
            let piece_id = ''
            for(var y = 0; y < piece_height; y++){
                for(var x = 0; x < piece_width; x++){
                    if (piece_grid[y][x] !== 0){
                        piece_id = piece_grid[y][x]
                        piece_coords.push([y, x])
                    }
                }
            }
            // console.log(piece_coords)
            for(var y2 = 0; y2 < 19; y2++){
                for(var x2 = 0; x2 < 9; x2++){
                    if (state.array[y2][x2] === piece_id){
                        state.array[y2][x2] = 0
                    }
                }
            }
            
            // console.log(piece_coords)

            piece_coords.forEach(coords => {
                
                let tmp_y = coords[0] + action.y
                let tmp_x = coords[1] + action.x
                if(state.array[tmp_y] !== undefined && state.array[tmp_y][tmp_x] !== undefined){
                    // console.log('qweqweqweqwe' + tmp_y + ' ; ' + tmp_x)
                    state.array[tmp_y][tmp_x] = piece_id
                }
            })
         
            // console.log(grid)
            return ({
                array: state.array,
                piece_id: piece_id,
                piece_y: action.y,
                piece_x: action.x
            })
        default:
            return state
    }
}

export default grid