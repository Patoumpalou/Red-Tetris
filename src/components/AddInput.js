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
		// console.log(props.waitingPieces)
		if(e.code === 'ArrowUp'){
			// rotation
			// console.log(' asdasd')
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
	})
    return (
        <section id="cc">
			<div className="container">
				<section className="flex-column-center" id="left-container">
					<UpdateGrid />
					<NextPiece />
					<Game />
				</section>
				<Sidebar />
          	</div>
		</section>
    )
}

addInput.propTypes = {
	// addInput: PropTypes.func.isRequired,
}
export default addInput
