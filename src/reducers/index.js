const initialState = {
  plants: [],
  well: null
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

export default reducer
