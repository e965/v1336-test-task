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
      time_2: 0,
      time_3: 24
    }

    this.dispatch = this.props.dispatch

    this.dispatch(this.filterPlants(this.state))

    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
  }

  filterPlants(data) {
    let plants = JSON.parse(JSON.stringify(Data))

    let period = {}

    data.time_2 = Number(data.time_2)
    data.time_3 = Number(data.time_3)

    switch (data.time_1) {
      case 'today':
      case 'yesterday':
        period.startDay = new Date(
            data.time_1 === 'today' ? Date.now() : Date.now() - 24 * 60 * 60 * 1000
          ).setHours(0, 0, 0, 0)
        period.startTime = new Date(period.startDay).setHours(data.time_2)
        period.endTime = new Date(period.startTime).getTime() + data.time_3 * 60 * 60 * 1000
        break;

      case 'week':
        period.startTime = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).setHours(0, 0, 0, 0)
        period.endTime = new Date(Date.now() + 24 * 60 * 60 * 1000).setHours(23, 59, 59, 999)
        break;

      default:
        break;
    }

    plants.forEach(plant => {
      plant.brigades = plant.brigades.filter(brigade => {
        return brigade.times.startTime >= period.startTime &&
          brigade.times.endTime <= period.endTime
      })
    })

    plants = plants.filter(plant => {
      return plant.brigades.length > 0
    })

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
