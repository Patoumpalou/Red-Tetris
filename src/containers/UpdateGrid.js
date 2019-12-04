import { connect } from 'react-redux'
import UpdateGridComponent from '../components/UpdateGrid'
import { updateGrid, pieceIsPlayed } from '../actions'

const mapDispatchToProps = dispatch => ({
  updateGrid: (x, y, piece_grid) => {
    dispatch(updateGrid(x, y, piece_grid))
  },
  pieceIsPlayed: (piece_grid, y, x, shape) => {
    dispatch(pieceIsPlayed(piece_grid, y, x, shape))
  }
})

export const UpdateGrid = connect(
  state => ({
    currentPiece: state.currentPiece,
  
}),
  mapDispatchToProps
  )(UpdateGridComponent)