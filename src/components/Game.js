import React from 'react'
import PropTypes from 'prop-types'
import  Piece from "./Piece"
import  Square from "./Square"
import currentPiece from '../reducers/currentPiece'
import { directive } from '@babel/types'
import { checkForContact } from '../function'

const Game = (props) => {
		// console.log(props.grid.array)
		
		// console.log(props.currentPiece.shape)
		let currentPiece = props.currentPiece
		let grid = props.grid.array
		// console.log(props.grid.array)
		if(currentPiece.piece_grid !== undefined){
			// console.log(checkForContact(props.grid, currentPiece))

		}


		let y = 0;
		let x = 0;
		return (
			<section id="tetris-game-box">
					{grid.map(element => (
							
							// console.log(element)
							
						element.map(e => (
							<Square key={x++} shape={e.toString()}/>
						))
						
					))}
					{/* <Piece key={currentPiece.id}
					shape={currentPiece.id}
					{...currentPiece}/> */}
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