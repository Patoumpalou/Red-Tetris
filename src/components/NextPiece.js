import React from 'react'
import PropTypes from 'prop-types'
import { getRandomNumber } from '../function'
import  Piece from "./Piece"

const NextPiece = (props) => {

// console.log(props);
if(props.waitingPieces.length === 0){
    props.dispatch(getRandomNumber(), 'waiting', '1')
    props.dispatch(getRandomNumber(), 'waiting', '2')
    props.dispatch(getRandomNumber(), 'waiting', '3')

}
// console.log(props.time)
// console.log(props.currentPiece)
let tmp = props.waitingPieces[0]
if(props.time >= 3 &&  props.currentPiece.length === 0){
    console.log('cc')
    props.sendPieceToGame(tmp.id, tmp.shape, 'current piece', 'whatever');
    props.dispatch(getRandomNumber(), 'waiting', '3')

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