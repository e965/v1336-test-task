import React from 'react'

class Header extends React.Component {
  createButton(iconName) {
    return (
      <button>
        <i className={`fa fa-${iconName}`} style={{ pointerEvents: 'none' }} aria-hidden="true" />
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
