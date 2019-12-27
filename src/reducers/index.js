import { combineReducers } from 'redux'

const actions = (state = [], action) => {
  switch (action.type) {
    case '':
      return
    default:
      return state
  }
}

export default combineReducers({
  actions
})
