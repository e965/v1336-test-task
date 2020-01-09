import React from 'react'

import Icon from './inc/Icon'
import Select from './inc/Select'

import Store from '../store'

class DataBlock extends React.Component {
  handleSubmit(event) {
    event.preventDefault()
  }

  render() {
    return (
      <form id={ this.props.id } onSubmit={ this.handleSubmit }>
        <div className="inputs input-group" data-flex>
          <label htmlFor={ this.props.id + '_ti' }>{ this.props.labelText }</label>
          <input id={ this.props.id + '_ti' } type="text" value ={ this.props.value } readOnly />
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

  render() {
    return (
      <div className="main__data">
        <DataBlock id="data_brigade" labelText="Бригада" value={ this.state.brigade.split(' ')[1] }>
          <Select id="data_brigade_sel" value='' changeEvent={() => {}}>
            <option disabled hidden value=''>Каналы</option>
          </Select>
        </DataBlock>

        <DataBlock id="data_field" labelText="Месторождение" value={ this.state.field }>
          <button>
            <Icon name="area-chart" />
            <span>Построить</span>
          </button>
        </DataBlock>

        <DataBlock id="data_cluster" labelText="Куст" value={ this.state.cluster } flex>
          <input className="fa fa-bar-chart" type="checkbox" />
          <input className="fa fa-hashtag" type="checkbox" />
          <input className="fa fa-key-modern" type="checkbox" />
          <input className="fa fa-download" type="checkbox" />
          <input className="fa fa-anchor" type="checkbox" />
        </DataBlock>

        <DataBlock id="data_well" labelText="Скважина" value={ this.state.num } flex>
          <button><Icon name="print" /></button>
          <button><Icon name="cogs" /></button>
          <button><Icon name="file-text" /></button>
        </DataBlock>
      </div>
    )
  }
}

export default MainData
