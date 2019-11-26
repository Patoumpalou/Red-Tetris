import { connect } from 'react-redux'
import NextPieceComponent from '../components/NextPiece' 
import { addPiece, sendPieceToGame, initGrid, updateGrid } from '../actions'
import currentPiece from '../reducers/currentPiece'


const mapDispatchToProps = dispatch => ({
    addPiece: (shape, state) => {
      dispatch(addPiece(shape, state))
    },
    sendPieceToGame: (id, shape, state, position) => {
      dispatch(sendPieceToGame(id, shape, state, position))
    },
    initGrid: () => {
      dispatch(initGrid())
    },
    updateGrid: (x, y, piece_grid) => {
      dispatch(updateGrid(x, y, piece_grid))
    }
  })
  
  export const NextPiece = connect(
      state => ({
        waitingPieces: state.waitingPieces,
        time: state.time,
        currentPiece: state.currentPiece
    }),
      mapDispatchToProps
    )(NextPieceComponent)