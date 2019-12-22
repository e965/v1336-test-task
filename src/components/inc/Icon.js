import React from 'react'

const Icon = props => (
  <i className={`fa fa-${ props.name }`} style={{ pointerEvents: 'none' }} aria-hidden="true" />
)

export default Icon
