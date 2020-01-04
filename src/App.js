import React from 'react'

import { Provider } from 'react-redux'
import Store from './store'

import Data from './data'

import Header from './components/Header'
import Main from './components/Main'

const App = () => {
  return (
    <Provider store={ Store }>
      <Header />
      <Main />
    </Provider>
  )
}

console.dir(Data)

export default App
