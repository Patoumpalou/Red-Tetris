import React from 'react'
import PropTypes from 'prop-types'
import Message from './Message'
import  Piece from "./Piece"
import currentPiece from '../reducers/currentPiece'

const Game = (props) => {
		console.log(props.grid.array)
		
		// console.log(props.currentPiece)
		let currentPiece = props.currentPiece
		// console.log(props.grid.array)

		let ml = "calc("+currentPiece.x+" * var(--square-dim))"
		let mt = "calc("+currentPiece.y+" * var(--square-dim))"
		return (
			<section id="tetris-game-box">
				<div style={{marginLeft: ml, marginTop: mt}}
				className={'curr_piece_y_'+ currentPiece.y + ' curr_piece_x_' + currentPiece.x}>
					<Piece key={currentPiece.id} {...currentPiece}/>
				</div>
			</section>
		)
}

Game.propTypes = {
	// inputs: PropTypes.arrayOf(
	// 	PropTypes.shape({
	// 		id: PropTypes.number.isRequired,
	// 		input: PropTypes.string.isRequired,
	// 		player: PropTypes.string.isRequired,
	// 	}).isRequired
	// ).isRequired
}

export default Game