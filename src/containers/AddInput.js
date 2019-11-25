import { connect } from 'react-redux'
import AddInputComponent from '../components/AddInput'
import { addInput, updateTime, incrementY } from '../actions'

const mapDispatchToProps = dispatch => ({
  addInput: (input, player) => {
    dispatch(addInput(input, player))
  },
  updateTime: (value) => {
    dispatch(updateTime(value))
  },
  incrementY: () => {
    dispatch(incrementY())
  }
})

export const AddInput = connect(
  () => ({}),
  mapDispatchToProps
  )(AddInputComponent)