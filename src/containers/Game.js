import { connect } from 'react-redux'
import GameComponent from '../components/Game'

export const Game = connect(
  state => ({
    // inputs: state.inputs,
    // time: state.time,
    currentPiece: state.currentPiece,
    grid: state.grid
}),
 {}
)(GameComponent)