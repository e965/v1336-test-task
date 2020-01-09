import React from 'react'

import Store from '../store'

class MainCanvas extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      wellNum: null
    }

    Store.subscribe(() => {
      if (Store.getState().lastAction.type === 'SELECT_WELL') {
        this.setState({
          wellNum: Store.getState().reducer.well.num
        })
      }
    })
  }

  render() {
    let cittenImg = this.state.wellNum
      ? <img src={`https://cataas.com/cat/says/${this.state.wellNum}?size=50&height=200`} alt="citten" />
      : ''

    return (
      <div className="main__canvas">
        { cittenImg }
      </div>
    )
  }
}

export default MainCanvas
