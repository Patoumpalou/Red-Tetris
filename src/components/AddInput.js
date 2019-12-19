import React from 'react'
import PropTypes from 'prop-types'
import { NextPiece }  from "../containers/NextPiece";
import { Game }  from "../containers/Game";
import { Sidebar }  from "../containers/Sidebar";
import { UpdateGrid }  from "../containers/UpdateGrid";

const addInput = (props) => {
	// console.log(props.currentPiece)
	
	
	// if(props.currentPiece.shape !== undefined){
		// if(props.currentPiece.y){
		// 	// console.log(props.grid.array)
		// 	// console.log(props.time)	
		// 	// console.log(props.currentPiece)
		
	
	// }
	
	const test = (e) => {
		console.log('here '+ props.grid.piece_y)

			// console.log(e.code)
		// console.log(props.waitingPieces)
		if(e.code === 'ArrowUp'){
			// rotation
			props.arrowUp()
			
		}
		if(e.code === 'ArrowDown'){
			// chute 
			props.arrowDown()
		}
		if(e.code === 'ArrowLeft'){
			// deplace a gauche
			props.arrowLeft()
		}
		if(e.code === 'ArrowRight'){
			// deplace a droite
			props.arrowRight()
		}
		if(e.code === 'Space'){
			props.space()
			// deplacement vertical 
		}
	}
	console.log(props.grid.listenerAdded)
	if (props.grid.listenerAdded === undefined){
		console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaa')
		document.addEventListener('keydown', test, true)
		props.addListener()
	}
	else{
		document.removeEventListener('keydown', test, true)
		console.log('ok')

	}
    return (
     <div
	 
	 ></div>
    )
}

addInput.propTypes = {
	// addInput: PropTypes.func.isRequired,
}
export default addInput
