import * as types from '../constants/ActionTypes'

const time = (state = [], action) => {
    switch (action.type) {
        case types.GAME_START:
            return ({
                gameStatus: 'on'
            })
        case types.GAME_OVER:
            return ({
                ...state,
                gameStatus: 'off'
            })
        case types.UPDATE_TIME: 
            if (state.gameStatus === 'on'){
                return ({
                    ...state,
                    value: action.value, 
                })
            }
            return state
           
        default:
            return state
    }
}

export default time