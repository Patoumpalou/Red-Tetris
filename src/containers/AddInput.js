import { connect } from 'react-redux'
import AddInputComponent from '../components/AddInput'
import { addListener, arrowUp, arrowDown, arrowLeft, arrowRight, space} from '../actions'

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
 addListener: () => {
   dispatch(addListener())
 }
})

export const AddInput = connect(
  state => ({
    // waitingPieces: state.waitingPieces,
    // time: state.time,
    // currentPiece: state.currentPiece,
    grid: state.grid

}),
  mapDispatchToProps
  )(AddInputComponent)