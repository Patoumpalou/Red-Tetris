import React from 'react'
import PropTypes from 'prop-types'
import  { NextPiece }  from "../containers/NextPiece";
import  { Game }  from "../containers/Game";
import  { Sidebar }  from "../containers/Sidebar";

const UpdateGrid = (props) => {
	let currentPiece = props.currentPiece
	// console.log(props.currentPiece.y)
	if (currentPiece.shape !== undefined){
		// ici tu va check :
		// si le piece arrive tt en bas 
		if (currentPiece.y = (20 - currentPiece.height)){
			// props.pieceIsPlayed(
			// 	currentPiece.piece_grid,
			// 	currentPiece.y,
			// 	currentPiece.x,
			// 	currentPiece.shape
			// )
		}
		// si la piece touche une autre
		props.updateGrid(
			currentPiece.x,
			currentPiece.y,
			currentPiece.piece_grid
		)
	}
	
    return (
        <section id="UpdateGrid">
			
		</section>
    )
}

UpdateGrid.propTypes = {

}
export default UpdateGrid
