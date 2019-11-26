import React from 'react'
import PropTypes from 'prop-types'
import  { NextPiece }  from "../containers/NextPiece";
import  { Game }  from "../containers/Game";
import  { Sidebar }  from "../containers/Sidebar";

const UpdateGrid = (props) => {
	
	console.log(props.currentPiece.y)
	if (props.currentPiece.shape !== undefined){
		props.updateGrid(
			props.currentPiece.x,
			props.currentPiece.y,
			props.currentPiece.piece_grid
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
