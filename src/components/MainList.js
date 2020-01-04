import React from 'react'

import { connect } from 'react-redux'

import Store from '../store'

class MainList extends React.Component {
  constructor(props) {
    super(props)

    this.dispatch = this.props.dispatch

    Store.subscribe(this.generateContent)
  }

  generateContent() {

  }

  render() {
    return (
      <div className="main__list" />
    )
  }
}

const mapStateToProps = state => {
  return { well: state.well }
}

const WrappedMainList = connect(mapStateToProps)(MainList)

export default WrappedMainList
