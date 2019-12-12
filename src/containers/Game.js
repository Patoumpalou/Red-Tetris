import { connect } from 'react-redux'
import GameComponent from '../components/Game'
import { updateGrid, pieceIsPlayed, gameOver } from '../actions'

const mapDispatchToProps = dispatch => ({
  // updateGrid: (x, y, piece_grid) => {
  //   dispatch(updateGrid(x, y, piece_grid))
  // },
  // pieceIsPlayed: (piece_grid, y, x, shape) => {
  //   dispatch(pieceIsPlayed(piece_grid, y, x, shape))
  // }

})

export const Game = connect(
  state => ({
    // inputs: state.inputs,
    // time: state.time,
    currentPiece: state.currentPiece,
    grid: state.grid
}),
 mapDispatchToProps
)(GameComponent)