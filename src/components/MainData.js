import React from 'react'

import Icon from './inc/Icon'

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
          <input id={ this.props.id + '_ti' } type="text" />
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
      <select id="data_brigade_sel">
        <option selected disabled hidden>Каналы</option>
      </select>
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
      <input className="fa fa-print" type="checkbox" />
      <input className="fa fa-cogs" type="checkbox" />
      <input className="fa fa-file-text" type="checkbox" />
    </DataBlock>
  </div>
)

export default MainData
