import React from 'react'
import PropTypes from 'prop-types'

const Piece = ({shape, state, position}) => {
	if (shape === undefined){
		return null
	}
	return (
		<div className="piece-container">
			<img className={'piece_shape_' + shape} src={"/img/pieces/piece_"+ shape + '.png'}/>
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