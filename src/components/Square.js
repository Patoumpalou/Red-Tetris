import React from 'react'
import PropTypes from 'prop-types'

const Square = ({shape, rotation, x, y, height, width}) => {
	// let rotation = ""
	
	// console.log("shape = "+shape)
	// console.log(shape)
	let url = ''
	if (shape !== '0'){
		url = "/img/squares/square_" + shape +'.png'
	}
	return (
		<div className=""
			style={{height: "20px", width: "20px"}}
		>
			{ <img 
				style={{width: '100%'}}
				
				// className={{''}} 
				src={url}
			/>}
		</div>
	)

}

Square.propTypes = {
	state: PropTypes.string,
	shape: PropTypes.string,
	position: PropTypes.string
}

export default Square