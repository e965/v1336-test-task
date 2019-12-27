import React from 'react'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import rootReducer from './reducers'

import Header from './components/Header'
import Main from './components/Main'

const store = createStore(rootReducer)

const App = () => {
  return (
    <Provider store={ store }>
      <Header />
      <Main />
    </Provider>
  )
}

export default App
