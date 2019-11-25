import { connect } from 'react-redux'
import NextPieceComponent from '../components/NextPiece' 
import { addPiece, sendPieceToGame } from '../actions'
import currentPiece from '../reducers/currentPiece'

const mapDispatchToProps = dispatch => ({
    dispatch: (shape, state, position) => {
      dispatch(addPiece(shape, state, position))
    },
    sendPieceToGame: (id, shape, state, position) => {
      dispatch(sendPieceToGame(id, shape, state, position))
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