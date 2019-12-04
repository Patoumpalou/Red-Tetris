import React from 'react'
import PropTypes from 'prop-types'
import { getRandomNumber } from '../function'
import  Piece from "./Piece"

const NextPiece = (props) => {

// console.log(props.waitingPieces);
if(props.waitingPieces.length === 0){
    let x = '7'
    // let x = getRandomNumber()
    props.addPiece(x, 'waiting')
    props.addPiece(getRandomNumber(), 'waiting')
    props.addPiece(getRandomNumber(), 'waiting')
    props.initGrid();
}
// console.log(props.time)
// console.log(props.currentPiece)
let tmp = props.waitingPieces[0]
if(props.time >= 3 &&  props.currentPiece.length === 0){
    props.sendPieceToGame(tmp.id, tmp.shape, 'current piece', tmp.piece_grid);
    props.addPiece(getRandomNumber(), 'waiting')
    props.updateGrid(4, 0, tmp.piece_grid)
}

return (
        <div className="flex-row-around" id="next-tetris-box">
            {
                props.waitingPieces.slice(0).reverse(0).map(piece => (
                    <Piece key={piece.id}
                    {...piece}/>
                ))
            }
        </div>
    )
}

export default NextPiece;