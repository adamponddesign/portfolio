import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

class Contact extends React.Component {
  render() {
    return (

      <div className="contact-section section">
        <div className="container">
          <h2>Contact</h2>
          <div className="columns is-vcentered has-text-centered" >
            <div className="column">
              <ul className="contact-list">
                <li>
                  <a href="mailto:adam@adampond.co.uk" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span className="tech-icons">adam@adampond.co.uk</span>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/adamponddesign" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                    <span className="tech-icons">github.com/adamponddesign</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/adam-pond/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} />
                    <span className="tech-icons">linkedin.com/in/adam-pond/</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="column">
              <img id="profile-pic" src="https://i.imgur.com/0PzSK1U.jpg?1" title="Profile Image" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact















// <a href="mailto:adam@adampond.co.uk" target="_blank" rel="noopener noreferrer">
// <FontAwesomeIcon icon={faEnvelope}  />
// <span className="tech-icons">adam@adampond.co.uk</span>
// </a>
// <p>
// <FontAwesomeIcon icon={faGithub}  />
// <a href="https://github.com/adamponddesign" target="_blank" rel="noopener noreferrer">github.com/adamponddesign</a>
// </p>
// <p>
// <FontAwesomeIcon icon={faLinkedin}  />
// <a href="https://www.linkedin.com/in/adam-pond/" target="_blank" rel="noopener noreferrer">linkedin.com/in/adam-pond/</a>
// </p>
