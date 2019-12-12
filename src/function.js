function SearchAnddestroyLines(grid){
    for(let y = 0; y < grid.length; y++){
        let isFullLine = true
        for (let x = 0; x < grid[0].length; x++){
            if (isFullLine === true && grid[y][x] === 0){
                isFullLine = false;
            }
        }
        if (isFullLine === true){
            // decalle tt d'un cran
            
            for(let z = y; z > 0; z--){
                grid[z] = grid[z - 1]
            }
            grid[0] =  [0,0,0,0,0,0,0,0,0,0]
            //
            y = 0
        }
    }
    return grid;
}

function getRotatedPieceMap(pieceMap){
    // if (pieceMap === undefined)
        // return pieceMap
    let old_w = pieceMap[0].length
    let old_h = pieceMap.length
    let res = new Array(old_w)
    for(let k = 0; k < old_w; k++){
        res[k] = new Array(old_h)
    }
    let new_w = old_h
    let new_h = old_w

    let i2 = 0;
    let j2 = 0;
    for(let i = (new_w -1); i >= 0; i--){
        i2 = 0;
        for(let j = 0; j < new_h; j++){
            res[j][i] = pieceMap[j2][i2]
            // console.log(pieceMap[j2][i2])
            // console.log("j2 = " +j2+ " i2 = " +i2)
            // console.log("j = " +j+ " i = " +i)
            i2++
        }
        j2++;
    }
    console.log(res)
    return res
}
function checkForContact(grid, currentPiece){
    // tu prend les coords des cases remplies de piece_grid
    // console.log(grid.array)
    let str = 'ok'
    let square_coords = []
    for(var y = 0; y < currentPiece.piece_grid.length; y++){
        for(var x = 0; x < currentPiece.piece_grid[0].length; x++){
            if (currentPiece.piece_grid[y][x] !== 0){
                square_coords.push([y, x])
            }
        }
    }
    square_coords.forEach(coords => {
                
        let tmp_y = coords[0] + currentPiece.y
        let tmp_x = coords[1] + currentPiece.x
        let isInOldPos
        if(grid.array[tmp_y] !== undefined && grid.array[tmp_y][tmp_x] !== undefined){
            if (grid.array[tmp_y][tmp_x] !== 0 ){
                isInOldPos = false
                grid.old_position.forEach(old_coords =>{
                    // si cette pos est presente dans old position, ne la prend pas
                    // console.log('old coords:')
                    // console.log(old_coords)
                   
                    if (tmp_y == old_coords[0] && tmp_x == old_coords[1]){
                        isInOldPos = true
                    }
                   
                })
                if (isInOldPos == false){
                       
                    // console.log('target coords')
                    // console.log(tmp_y, tmp_x)
                    
                    str = 'stop'
                }
            }
           
        }
    })
    return str; 
}
function get_piece_grid(shape, id){
    // console.log(' heeeeeeerrreeeeee')
    id = shape
    if (shape === '1'){
        return [
            [id, 0,  0],
            [id, id, id]
        ]
    }
    if (shape === '2'){
        return [
            [0,  0,  id],
            [id, id, id]
        ]
    }
    if (shape === '3'){
        return [
            [id, id],
            [id, id]
        ]
    }
    if (shape === '4'){
        return [
            [id, id, 0],
            [0,  id, id]
        ]
    }
    if (shape === '5'){
        return [
            [0,  id, 0],
            [id, id, id]
        ]
    }
    if (shape === '6'){
        return [
            [0,  id, id],
            [id, id, 0]
        ]
    }
    if (shape === '7'){
        return [
            [id, id, id, id]
        ]
    }
}

function getRandomNumber(){
    return Math.round((Math.random() * 6) + 1).toString();
}

export {
    SearchAnddestroyLines,
    checkForContact,
    getRandomNumber,
    get_piece_grid,
    getRotatedPieceMap
}