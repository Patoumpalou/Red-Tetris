import React from 'react'
import PropTypes from 'prop-types'

const Piece = ({shape, rotation, x, y, height, width}) => {
	// let rotation = ""
	
	// console.log("shape = "+shape)
	// console.log(shape)
	if (shape === undefined){
		return null
	}
	if(rotation !== undefined){
		// console.log(rotation)
		 rotation = "rotate("+rotation+"deg)"
	}
	let ml = "calc("+x+" * var(--square-dim))"
	let mt = "calc("+y+" * var(--square-dim))"
	let delta = 20 - height
	let imgWidth = "calc(var(--square-dim) * "+width+")"
	let imgHeight = "calc(var(--square-dim) * "+height+")"
	if(y >= delta){
		console.log(height)
		console.log('delta')
		mt = "calc("+delta+" * var(--square-dim))"
	}
	return (
		<div className="piece-img"
			style={{marginLeft: ml, marginTop: mt, height: imgHeight, width: imgWidth}}
		>
			<img 
				style={{transform: rotation}}
				alt="a cute tetris"
				className={'piece-img piece_shape_' + shape} 
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