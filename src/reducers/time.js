import * as types from '../constants/ActionTypes'

const time = (state = [], action) => {
    switch (action.type) {
        case types.UPDATE_TIME: 
            return (
                [ action.value ]
            )
        default:
            return state
    }
}

export default time