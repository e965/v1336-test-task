import React from 'react'

import Icon from './inc/Icon'
import Select from './inc/Select'

import Store from '../store'
import Data from '../data'

class DataBlock extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      num: '',
      cluster: '',
      brigade: '',
      field: ''
    }

    Store.subscribe(() => {
      if (Store.getState().lastAction.type === 'SELECT_WELL') {
        this.setState({ ...Store.getState().reducer.well })
      }
    })
  }

  handleSubmit(event) {
    event.preventDefault()
  }

  render() {
    return (
      <form id={ this.props.id } onSubmit={ this.handleSubmit }>
        <div className="inputs input-group" data-flex>
          <label htmlFor={ this.props.id + '_ti' }>{ this.props.labelText }</label>
          <input id={ this.props.id + '_ti' } type="text" value={ this.state[this.props.value] } readOnly />
        </div>
        <div className={ 'inputs ' + (this.props.children.length > 0 ? 'input-group' : 'input-one') } data-flex={ this.props.flex }>
          { this.props.children }
        </div>
      </form>
    )
  }
}

class MainData extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      channel: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({ channel : event.target.value })
  }

  openData() {
    let data = JSON.parse(JSON.stringify(Data))

    let formatDate = date => {
      return new Date(date).toLocaleDateString(
        [], { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }
      )
    }

    data.forEach(plant => {
      plant.brigades.forEach(brigade => {
        let timesKeys = Object.keys(brigade.times)
        timesKeys.forEach(key => {
          brigade.times[key] = formatDate(brigade.times[key])
        })
      })
    })

    window.open('about:blank').document.body.innerHTML = `<pre>${ JSON.stringify(data, null, '  ') }</pre>`
  }

  render() {
    return (
      <div className="main__data">
        <DataBlock id="data_brigade" labelText="Бригада" value="brigade">
          <Select id="data_brigade_sel" value={ this.state.channel } changeEvent={ this.handleChange }>
            <option disabled hidden value=''>Каналы</option>
            <option>Россия 24</option>
            <option>2х2</option>
            <option>СТС</option>
            <option>Первый канал</option>
            <option>PewDiePie</option>
            <option>Беломорско-Балтийский</option>
            <option>#aniperm</option>
          </Select>
        </DataBlock>

        <DataBlock id="data_field" labelText="Месторождение" value="field">
          <button>
            <Icon name="area-chart" />
            <span>Построить</span>
          </button>
        </DataBlock>

        <DataBlock id="data_cluster" labelText="Куст" value="cluster" flex>
          <input className="fa fa-bar-chart" type="checkbox" />
          <input className="fa fa-hashtag" type="checkbox" />
          <input className="fa fa-key-modern" type="checkbox" />
          <input className="fa fa-download" type="checkbox" />
          <input className="fa fa-anchor" type="checkbox" />
        </DataBlock>

        <DataBlock id="data_well" labelText="Скважина" value="num" flex>
          <button onClick={() => { this.openData() }}><Icon name="print" /></button>
          <button><Icon name="cogs" /></button>
          <button><Icon name="file-text" /></button>
        </DataBlock>
      </div>
    )
  }
}

export default MainData
