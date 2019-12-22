import React from 'react'

class DataBlock extends React.Component {
  constructor(props) {
    super(props)
  }

  handleSubmit(event) {
    event.preventDefault()
  }

  render() {
    return (
      <form id={ this.props.id } onSubmit={ this.handleSubmit }>
        <div className="input-group">
          <label htmlFor={ this.props.id + '_ti' }>{ this.props.labelText }</label>
          <input id={ this.props.id + '_ti' } type="text" />
        </div>
        <div className={ this.props.children.length > 0 ? 'input-group' : 'input-one' }>
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
      <button>Построить</button>
    </DataBlock>

    <DataBlock id="data_cluster" labelText="Куст">
      <input type="checkbox" />
      <input type="checkbox" />
      <input type="checkbox" />
      <input type="checkbox" />
      <input type="checkbox" />
    </DataBlock>

    <DataBlock id="data_well" labelText="Скважина">
      <input type="checkbox" />
      <input type="checkbox" />
      <input type="checkbox" />
    </DataBlock>
  </div>
)

export default MainData
