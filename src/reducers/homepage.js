import * as types from '../constants/ActionTypes'

const homepage = (state = [], action) => {
    switch (action.type) {
        case types.ON_HOME:
            return ({
                home: true
            })
        default:
            return state
    }
}

export default homepage
