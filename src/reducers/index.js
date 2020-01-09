import { combineReducers } from 'redux'

const initialState = {
  plants: [],
  well: {}
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FILTER_PLANTS':
      return { ...state, plants: action.payload }

    case 'SELECT_WELL':
      return { ...state, well: action.payload }

    default:
      return state
  }
}

// https://github.com/reduxjs/redux/issues/580#issuecomment-133188511
const lastAction = (state = null, action) => action

export default combineReducers({
  reducer, lastAction
})
