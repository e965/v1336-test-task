import React from 'react'

import Icon from './inc/Icon'

class MainTime extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      time_1: 'today',
      time_2: '0',
      time_3: '24'
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value })

    console.log(this.state)
  }

  render() {
    return (
      <form id="time_select" onSubmit={ this.handleSubmit }>
        <div className="input-group">
          <label htmlFor="time_1">
            <Icon name="clock-o" />
          </label>

          <select id="time_1" value={ this.state.time_1 } onChange={ this.handleChange }>
            <option value="today">Сегодня</option>
            <option value="yesterday">Вчера</option>
            <option value="week">Неделя</option>
          </select>
        </div>

        <div className="input-group">
          <label htmlFor="time_2">
            <Icon name="hourglass-half" />
          </label>

          <div className="inputs-group--column">
            <select id="time_2" value={ this.state.time_2 } onChange={ this.handleChange }>
              <option value="0">Начало 00:00</option>
              <option value="6">Начало 06:00</option>
              <option value="12">Начало 12:00</option>
              <option value="18">Начало 18:00</option>
              <option value="23">Начало 23:00</option>
            </select>

            <select id="time_3" value={ this.state.time_3 } onChange={ this.handleChange }>
              <option value="1">1 час</option>
              <option value="6">6 час</option>
              <option value="12">12 часов</option>
              <option value="18">18 часов</option>
              <option value="24">24 часа</option>
            </select>
          </div>
        </div>
      </form>
    )
  }
}

export default MainTime
