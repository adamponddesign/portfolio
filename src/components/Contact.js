import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


class Contact extends React.Component {
  render() {
    return (

      <div id="contact" className="contact-section section">
        <div className="container">

          <h2>{'< contact />'}</h2>
          <div className="columns is-vcentered has-text-centered" >
            <div className="column contact-icons">



              <a className="button" href="mailto:adam@adampond.co.uk">
                <FontAwesomeIcon icon={faEnvelope} />
                <span>Email</span>
              </a>

              <a className="button" href="https://github.com/adamponddesign" target="_blank" rel="noopener noreferrer" >
                <FontAwesomeIcon icon={faGithub} />
                <span>GitHub</span>
              </a>

              <a className="button" href="https://www.linkedin.com/in/adam-pond/" target="_blank" rel="noopener noreferrer" >
                <FontAwesomeIcon icon={faLinkedin} />
                <span>Linkedin</span>
              </a>




            </div>
            <div className="column is-hidden-mobile">
              <img id="profile-pic" src="https://i.imgur.com/0PzSK1U.jpg?1" title="Profile Image" />
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Contact
