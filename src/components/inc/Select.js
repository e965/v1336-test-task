import React from 'react'

import Icon from './Icon'

const Select = props => (
  <div className="select-wrapper">
    <select id={ props.id } style={ props.styles } value={ props.value } onChange={ props.changeEvent } disabled={ props.disabled }>
      { props.children }
    </select>
    <Icon name="chevron-down" />
  </div>
)

export default Select
