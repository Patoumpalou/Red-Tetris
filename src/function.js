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

export { getRandomNumber, get_piece_grid}