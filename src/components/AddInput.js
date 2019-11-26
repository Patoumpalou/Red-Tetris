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
	document.addEventListener('keydown', (e) => {
		// console.log(e.code)
		console.log(props.waitingPieces)
		if(e.code === 'ArrowUp'){
			// rotation
			// console.log(' asdasd')
			props.addInput('rotate', 'Me')
			
		}
		if(e.code === 'ArrowDown'){
			// chute 
			props.addInput('down', 'Me')
		}
		if(e.code === 'ArrowLeft'){
			// deplace a gauche
			props.addInput('move left', 'Me')
		}
		if(e.code === 'ArrowRight'){
			// deplace a droite
			props.addInput('move right', 'Me')
		}
		if(e.code === 'Space'){
			// deplacement vertical 
		}
	})
    return (
        <section id="cc">
			<div className="container">
				<section className="flex-column-center" id="left-container">
					<UpdateGrid currentPiece={props.currentPiece}/>
					<NextPiece />
					<Game />
				</section>
				<Sidebar />
          	</div>
		</section>
    )
}

addInput.propTypes = {
	addInput: PropTypes.func.isRequired,
}
export default addInput
