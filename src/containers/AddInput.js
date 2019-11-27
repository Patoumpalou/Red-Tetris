import { connect } from 'react-redux'
import AddInputComponent from '../components/AddInput'
import { arrowUp, arrowDown, arrowLeft, arrowRight, space} from '../actions'

const mapDispatchToProps = dispatch => ({
  arrowLeft: () => {
    dispatch(arrowLeft())
  },
  arrowRight: () => {
    dispatch(arrowRight())
  },
  arrowDown: () => {
    dispatch(arrowDown())
  },
  arrowUp: () => {
    dispatch(arrowUp())
  },
  space: () => {
    dispatch(space())
  },
})

export const AddInput = connect(
  () => ({
    // waitingPieces: state.waitingPieces,
    // time: state.time,
    // currentPiece: state.currentPiece,

}),
  mapDispatchToProps
  )(AddInputComponent)