import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Breakpoint from 'react-socks'

class Navbar extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      active: false
    }
    this.toggleActive = this.toggleActive.bind(this)
  }


  toggleActive() {
    this.setState({ active: !this.state.active })
  }

  render() {
    return (

      <nav
        className={`${this.state.active ? ' open' : ''}`}>


        <div className="nav-logo">
          <a href="#">
            <Breakpoint m down>
              <img src="https://i.imgur.com/vkDvRQs.png" />
            </Breakpoint>
            <Breakpoint l up>
              <img src="https://i.imgur.com/S5RNmij.png" />
            </Breakpoint>
          </a>
        </div>

        <a id="burger" className="skip" href="#menu" onClick={this.toggleActive}>
          <FontAwesomeIcon icon={faBars} />
        </a>


        <ul id="menu">
          <li onClick={this.toggleActive}><a href="#about">About</a></li>
          <li onClick={this.toggleActive}><a href="#experience">Experience</a></li>
          <li onClick={this.toggleActive}><a href="#projects">Projects</a></li>
          <li onClick={this.toggleActive}><a href="#interests">Interests</a></li>
          <li onClick={this.toggleActive}><a href="#contact">Contact</a></li>
        </ul>
      </nav>



    )
  }
}
export default Navbar
