import { connect } from 'react-redux'
import AddInputComponent from '../components/AddInput'
import { addInput, updateTime, updateGrid, incrementY} from '../actions'

const mapDispatchToProps = dispatch => ({
  addInput: (input, player) => {
    dispatch(addInput(input, player))
  },
  updateGrid: (x, y, piece_grid) => {
    dispatch(updateGrid(x, y, piece_grid))
  }
})

export const AddInput = connect(
  state => ({
    waitingPieces: state.waitingPieces,
    time: state.time,
    currentPiece: state.currentPiece,

}),
  mapDispatchToProps
  )(AddInputComponent)