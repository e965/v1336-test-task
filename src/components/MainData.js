import React from 'react'

import Icon from './inc/Icon'
import Select from './inc/Select'

class DataBlock extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  handleSubmit(event) {
    event.preventDefault()
  }

  render() {
    return (
      <form id={ this.props.id } onSubmit={ this.handleSubmit }>
        <div className="inputs input-group" data-flex>
          <label htmlFor={ this.props.id + '_ti' }>{ this.props.labelText }</label>
          <input id={ this.props.id + '_ti' } type="text" readOnly />
        </div>
        <div className={ 'inputs ' + (this.props.children.length > 0 ? 'input-group' : 'input-one') } data-flex={ this.props.flex }>
          { this.props.children }
        </div>
      </form>
    )
  }
}

const MainData = () => (
  <div className="main__data">
    <DataBlock id="data_brigade" labelText="Бригада">
      <Select id="data_brigade_sel">
        <option selected disabled hidden>Каналы</option>
      </Select>
    </DataBlock>

    <DataBlock id="data_field" labelText="Месторождение">
      <button>
        <Icon name="area-chart" />
        <span>Построить</span>
      </button>
    </DataBlock>

    <DataBlock id="data_cluster" labelText="Куст" flex>
      <input className="fa fa-bar-chart" type="checkbox" />
      <input className="fa fa-hashtag" type="checkbox" />
      <input className="fa fa-key-modern" type="checkbox" />
      <input className="fa fa-download" type="checkbox" />
      <input className="fa fa-anchor" type="checkbox" />
    </DataBlock>

    <DataBlock id="data_well" labelText="Скважина" flex>
      <button><Icon name="print" /></button>
      <button><Icon name="cogs" /></button>
      <button><Icon name="file-text" /></button>
    </DataBlock>
  </div>
)

export default MainData
