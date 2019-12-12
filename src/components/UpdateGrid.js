import React from 'react'
import PropTypes from 'prop-types'
import  { NextPiece }  from "../containers/NextPiece";
import  { Game }  from "../containers/Game";
import  { Sidebar }  from "../containers/Sidebar";
import { checkForContact, SearchAnddestroyLines } from '../function'
const UpdateGrid = (props) => {
	let currentPiece = props.currentPiece
	let grid = props.grid
	// console.log(props.currentPiece.y)
	
	
	if (currentPiece.shape !== undefined && (currentPiece.y !== grid.piece_y || currentPiece.x != grid.piece_x)){
		// console.log(grid.old_position)
		let bool
		let bool2
		bool = checkForContact(grid, currentPiece)
		
		let y = currentPiece.y
		let limit = 20 - currentPiece.height 
		// console.log(y, limit)
		if (y >= limit){
			bool2 = 'bottomtouched'
		}
		// console.log(bool)
		if (bool === 'stop'){
			console.log(grid.gameStatus)
			// console.log(20 - currentPiece.height)
			console.log(currentPiece.y )
			if ((currentPiece.y - currentPiece.height) <= 0 && grid.gameStatus === "on"){
				console.log('gameooooooooooooooooooooooooooooooover')
				props.gameOver()
			}
			else{
				console.log('piece is played')
				// juste une condition pour afficher la derniere piece en haut
				// a la fin de la partie
				if (grid.gameStatus === "off"){
					console.log(currentPiece.y, currentPiece.shape)
					props.updateGrid(
						grid.piece_x,
						grid.piece_y,
						currentPiece.piece_grid
					)
				}

				props.pieceIsPlayed(
					currentPiece.piece_grid,
					currentPiece.y,
					currentPiece.x,
					currentPiece.shape
				)
			}			
		}
		else if(bool2 == 'bottomtouched'){
			console.log('botttom touched')
			props.updateGrid(
				currentPiece.x,
				currentPiece.y,
				currentPiece.piece_grid
			)
			let tmp = SearchAnddestroyLines(grid.array)
			console.log(tmp)
			console.log('piece is played')
			props.pieceIsPlayed(
				currentPiece.piece_grid,
				currentPiece.y,
				currentPiece.x,
				currentPiece.shape
			)
		}
		else{
			props.updateGrid(
				currentPiece.x,
				currentPiece.y,
				currentPiece.piece_grid
			)
			let tmp = SearchAnddestroyLines(grid.array)
			console.log(tmp)
		}
	}
	
    return (
        <section id="UpdateGrid">
			
		</section>
    )
}

UpdateGrid.propTypes = {

}
export default UpdateGrid
