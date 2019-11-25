import React from 'react'
import PropTypes from 'prop-types'
import  { NextPiece }  from "../containers/NextPiece";
import  { Game }  from "../containers/Game";
import  { Sidebar }  from "../containers/Sidebar";

const addInput = (props) => {
	let input
	let i = 0;
	setInterval(() => {
		// console.log(i)
		if(i >= 4 ){
			// console.log('incrementy')
			props.incrementY()
		}
		props.updateTime(i)
		i++;
	}, 1000);
	document.addEventListener('keydown', (e) => {
		// console.log(e.code)
		console.log(props.waitingPieces)
		if(e.code == 'ArrowUp'){
			// rotation
			props.addInput('rotate', 'Me')
			
		}
		if(e.code == 'ArrowDown'){
			// chute 
			props.addInput('down', 'Me')
		}
		if(e.code == 'ArrowLeft'){
			// deplace a gauche
			props.addInput('move left', 'Me')
		}
		if(e.code == 'ArrowRight'){
			// deplace a droite
			props.addInput('move right', 'Me')
		}
		if(e.code == 'Space'){
			// deplacement vertical 
		}
	})
    return (
        <section id="cc">
			<div className="container">
				<section className="flex-column-center" id="left-container">
					<NextPiece />
					<Game />
				</section>
				<Sidebar />
          	</div>
		</section>
    )
}

addInput.propTypes = {
	updateTime: PropTypes.func.isRequired,
	addInput: PropTypes.func.isRequired,
	incrementY: PropTypes.func.isRequired
}
export default addInput
