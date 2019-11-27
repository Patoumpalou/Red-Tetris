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

function get_piece_grid(shape, id){
    // console.log(' heeeeeeerrreeeeee')
    if (shape === '0'){
        return [
            [id, 0,  0],
            [id, id, id]
        ]
    }
    if (shape === '1'){
        return [
            [0,  0,  id],
            [id, id, id]
        ]
    }
    if (shape === '2'){
        return [
            [id, id],
            [id, id]
        ]
    }
    if (shape === '3'){
        return [
            [id, id, 0],
            [0,  id, id]
        ]
    }
    if (shape === '4'){
        return [
            [0,  id, 0],
            [id, id, id]
        ]
    }
    if (shape === '5'){
        return [
            [0,  id, id],
            [id, id, 0]
        ]
    }
    if (shape === '6'){
        return [
            [id, id, id, id]
        ]
    }
}

function getRandomNumber(){
    return Math.round(Math.random() * 6).toString();
}

export { getRandomNumber, get_piece_grid, getRotatedPieceMap}