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
            let grid = state.array
            // console.log(grid)
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
                    if (grid[y2][x2] === piece_id){
                        grid[y2][x2] = 0
                    }
                }
            }
            
            // console.log(piece_coords)
            piece_coords.forEach(coords => {
                
                let tmp_y = coords[0] + action.y
                let tmp_x = coords[1] + action.x
                console.log(tmp_y + ' ; ' + tmp_x)
                if(grid[tmp_y] !== undefined && grid[tmp_y][tmp_x] !== undefined){
                    grid[tmp_y][tmp_x] = piece_id
                }
            })
            // console.log(action.y)
            // console.log(grid)
            return ({
                array:grid,
                piece_id: piece_id,
                piece_y: action.y,
                piece_x: action.x
            })
        default:
            return state
    }
}

export default grid