import { connect } from 'react-redux'
import ChronoComponent from '../components/Chrono'
import { gameStart, addInput, updateTime, updateGrid, incrementY} from '../actions'

const mapDispatchToProps = dispatch => ({
  updateTime: (value) => {
    dispatch(updateTime(value))
  },
  incrementY: () => {
    dispatch(incrementY())

  },
  updateGrid: (x, y, piece_grid) => {
    dispatch(updateGrid(x, y, piece_grid))
  },
  gameStart: () => {
    dispatch(gameStart())
  }
})

export const Chrono = connect(
  () => ({}),
  mapDispatchToProps
  )(ChronoComponent)