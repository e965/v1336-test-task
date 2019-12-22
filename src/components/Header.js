import React from 'react'

import Icon from './inc/Icon'

class Header extends React.Component {
  createButton(iconName) {
    return (
      <button>
        <Icon name={iconName} />
      </button>
    )
  }

  render() {
    return (
      <header className="header">
        <ul className="header--left">
          <li>
            { this.createButton('bars') }
          </li>
        </ul>
        <ul className="header--right">
          <li>
            { this.createButton('phone') }
          </li>
          <li>
            { this.createButton('info') }
          </li>
        </ul>
      </header>
    )
  }
}

export default Header
