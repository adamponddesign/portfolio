import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'


class Projects extends React.Component {




  render() {
    return (
      <div id="projects" className="section projects-section">
        <div className="container">
          <h2>{'<Projects />'}</h2>
          {/* Progress Pro */}
          <div className="columns is-vcentered has-text-centered" >
            <div className="column is-two-thirds">

              <img className="apple-items" src="https://i.imgur.com/hBh3x9n.png" />

            </div>
            <div className="column">

              <h3>Progress Pro</h3>
              <p className="project-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec et odio pellentesque diam. Pharetra sit amet aliquam id diam maecenas ultricies mi.</p>


              <a className="button" href="https://github.com/adamponddesign/progress-pro" target="_blank" rel="noopener noreferrer" >
                <FontAwesomeIcon icon={faGithub} />
                <span>View on GitHub</span>
              </a>
              <a className="button" href="https://progress-pro.herokuapp.com" target="_blank" rel="noopener noreferrer" >
                <FontAwesomeIcon icon={faLink} />
                <span>View live Site</span>
              </a>

            </div>
          </div>
          <hr />
          <div className="columns is-vcentered has-text-centered" >
            <div className="column is-two-thirds">

              <img className="imac-image" src="https://i.imgur.com/XDEWOpK.png" />

            </div>
            <div className="column">

              <h3>After Midnight</h3>
              <p className="project-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec et odio pellentesque diam. Pharetra sit amet aliquam id diam maecenas ultricies mi.</p>


              <a className="button" href="https://github.com/adamponddesign/after-midnight" target="_blank" rel="noopener noreferrer" >
                <FontAwesomeIcon icon={faGithub} />
                <span>View on GitHub</span>
              </a>
              <a className="button" href="https://after-midnight.herokuapp.com" target="_blank" rel="noopener noreferrer" >
                <FontAwesomeIcon icon={faLink} />
                <span>View live Site</span>
              </a>

            </div>
          </div>
          <hr />

          <div className="columns is-vcentered has-text-centered" >
            <div className="column is-two-thirds">

              <img className="imac-image" src="https://i.imgur.com/6lk3WkJ.png" />

            </div>
            <div className="column">

              <h3>London Train Departures</h3>
              <p className="project-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec et odio pellentesque diam. Pharetra sit amet aliquam id diam maecenas ultricies mi.</p>


              <a className="button" href="https://github.com/adamponddesign/london-train-departures" target="_blank" rel="noopener noreferrer" >
                <FontAwesomeIcon icon={faGithub} />
                <span>View on GitHub</span>
              </a>
              <a className="button" href="https://adamponddesign.github.io/london-train-departures" target="_blank" rel="noopener noreferrer" >
                <FontAwesomeIcon icon={faLink} />
                <span>View live Site</span>
              </a>

            </div>
          </div>
          <hr />

          <div className="columns is-vcentered has-text-centered" >
            <div className="column is-two-thirds">

              <img className="iphone-image" src="https://i.imgur.com/yOC2TtT.png" />

            </div>
            <div className="column">

              <h3>Mastermind</h3>
              <p className="project-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec et odio pellentesque diam. Pharetra sit amet aliquam id diam maecenas ultricies mi.</p>


              <a className="button" href="https://github.com/adamponddesign/mastermind" target="_blank" rel="noopener noreferrer" >
                <FontAwesomeIcon icon={faGithub} />
                <span>View on GitHub</span>
              </a>
              <a className="button" href="https://adamponddesign.github.io/mastermind" target="_blank" rel="noopener noreferrer" >
                <FontAwesomeIcon icon={faLink} />
                <span>View live Site</span>
              </a>

            </div>
          </div>











        </div>
      </div>


    )
  }
}

export default Projects
