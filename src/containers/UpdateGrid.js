import { connect } from 'react-redux'
import UpdateGridComponent from '../components/UpdateGrid'
import { updateGrid } from '../actions'

const mapDispatchToProps = dispatch => ({
  updateGrid: (x, y, piece_grid) => {
    dispatch(updateGrid(x, y, piece_grid))
  }
})

export const UpdateGrid = connect(
  state => ({
    currentPiece: state.currentPiece,

}),
  mapDispatchToProps
  )(UpdateGridComponent)