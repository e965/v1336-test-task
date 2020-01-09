import React from 'react'

import { connect } from 'react-redux'

import Store from '../store'

class MainList extends React.Component {
  constructor(props) {
    super(props)

    this.dispatch = this.props.dispatch

    this.state = {
      plants: Store.getState().reducer.plants
    }

    Store.subscribe(() => {
      if (Store.getState().lastAction.type === 'FILTER_PLANTS') {
        this.setState((prevState, props) => ({
          plants: props.plants
        }))
      }
    })
  }

  choiceWell(data) {
    return {
      type: 'SELECT_WELL',
      payload: data
    }
  }

  handleWellChoice(data) {
    this.dispatch(this.choiceWell(data))
  }

  render() {
    let PlantsList = []

    this.state.plants.forEach((plant, i) => {
      let brigadesList = []

      plant.brigades.forEach((brigade, j) => {
        let wellsList = []

        brigade.wells.forEach((well, k) => {
          let wellData = {
            num: well,
            cluster: 1,
            brigade: brigade.title,
            field: brigade.field
          }

          let wellLI =
            <li key={k}>
              <button onClick={() => { this.handleWellChoice(wellData) }}>
                Скв. №{ well }
              </button>
            </li>

          wellsList.push(wellLI)
        })

        let brigadeLI =
          <li key={j}>
            <details>
              <summary>{ brigade.title }</summary>
              <ul>
                { wellsList }
              </ul>
            </details>
          </li>

          brigadesList.push(brigadeLI)
      })

      let plantLI =
        <li key={i}>
          <details>
            <summary>{ plant.title }</summary>
            <ul>
              { brigadesList }
            </ul>
          </details>
        </li>

      PlantsList.push(plantLI)
    })

    return (
      <div className="main__list">
        <ul>
          { PlantsList }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { ...state.reducer }
}

const WrappedMainList = connect(mapStateToProps)(MainList)

export default WrappedMainList
