import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

class Home extends React.Component {
  render() {
    return (
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container">

            <h1 id="name-home-hero">
              <span className="brackets">{'<'}</span>
              <span>{'Adam Pond /'}</span>
              <span className="brackets">{'>'}</span>
            </h1>
            <h2 id="logo-sub" className="anim-typewriter">Full-Stack Developer</h2>

            <a href="#about">
              <div id="scroll-chevron" className="fade-in bounce">
                <FontAwesomeIcon icon={faChevronDown} />
              </div>
            </a>

          </div>
        </div>
      </section>


    )
  }
}

export default Home
