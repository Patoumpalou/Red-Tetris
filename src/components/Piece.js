import React from 'react'
import PropTypes from 'prop-types'

const Piece = ({shape, rotation}) => {
	// let rotation = ""
	
	// console.log(rotation)
	if (shape === undefined){
		return null
	}
	if(rotation !== undefined){
		console.log(rotation)
		 rotation = "rotate("+rotation+"deg)"
	}
	return (
		<div className="piece-container">
			<img 
				style={{transform: rotation}}
				alt="a cute tetris"
				className={'piece_shape_' + shape} 
				src={"/img/pieces/piece_"+ shape + '.png'}
			/>
		</div>
	)
	// <p> 
	// 	<i>state: {state}</i><br></br>
	// 	shape: {shape} <br></br>
	// 	position: {position}
	// </p>
}

Piece.propTypes = {
	state: PropTypes.string,
	shape: PropTypes.string,
	position: PropTypes.string
}

export default Piece