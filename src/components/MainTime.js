import React from 'react'

import { connect } from 'react-redux'

import Data from '../data'

import Icon from './inc/Icon'
import Select from './inc/Select'

class TimeForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      time_1: 'today',
      time_2: '0',
      time_3: '24'
    }

    this.dispatch = this.props.dispatch

    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
  }

  filterPlants(data) {
    let plants = JSON.parse(JSON.stringify(Data))

    plants.forEach(plant => {
      plant.brigades.forEach(brigade => {
        brigade.d = true

        switch (data.time_1) {
          case 'today':
            if (
              brigade.times.dayStart === 0 &&
              brigade.times.duration === 1
            ) {
              brigade.d = false
            }; break
          case 'yesterday':
            if (
              brigade.times.dayStart === 1 &&
              brigade.times.duration === 1
            ) {
              brigade.d = false
            }; break
          case 'week':
            if (
              brigade.times.dayStart >= 0 &&
              brigade.times.dayStart <= 7 &&
              brigade.times.duration >= 1
            ) {
              brigade.d = false
            }; break
          default:
            break
        }
      })

      plant.brigades = plant.brigades.filter(brigade => {
        return !brigade.d
      })
    })

    console.log(Data)
    console.log(plants)

    return {
      type: 'FILTER_PLANTS',
      payload: plants
    }
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value }, () => {
      this.dispatch(this.filterPlants(this.state))
    })
  }

  render() {
    return (
      <form id="time_select" onSubmit={ this.handleSubmit }>
        <div className="inputs input-group" data-flex>
          <label htmlFor="time_1">
            <Icon name="clock-o" />
          </label>

          <Select id="time_1" value={ this.state.time_1 } changeEvent={ this.handleChange }>
            <option value="today">Сегодня</option>
            <option value="yesterday">Вчера</option>
            <option value="week">Неделя</option>
          </Select>
        </div>

        <div className="inputs input-group" data-flex>
          <label htmlFor="time_2">
            <Icon name="hourglass-half" />
          </label>

          <div className="inputs input-group--column">
            <Select id="time_2" value={ this.state.time_2 } changeEvent={ this.handleChange }>
              <option value="0">Начало 00:00</option>
              <option value="6">Начало 06:00</option>
              <option value="12">Начало 12:00</option>
              <option value="18">Начало 18:00</option>
            </Select>

            <Select id="time_3" styles={{ marginTop: '1px' }} value={ this.state.time_3 } changeEvent={ this.handleChange }>
              <option value="1">1 час</option>
              <option value="6">6 час</option>
              <option value="12">12 часов</option>
              <option value="18">18 часов</option>
              <option value="24">24 часа</option>
            </Select>
          </div>
        </div>
      </form>
    )
  }
}

const mapStateToProps = state => {
  return { plants: state.plants }
}

const WrappedTimeForm = connect(mapStateToProps)(TimeForm)

const MainTime = () => (
  <div className="main__time">
    <WrappedTimeForm />
  </div>
)

export default MainTime
