import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

class Contact extends React.Component {
  render() {
    return (

      <div className="contact-section">
        <img id="profile-pic" src="https://i.imgur.com/0PzSK1U.jpg?1" title="Profile Image" />
        <p><FontAwesomeIcon icon={faEnvelope} color="white" /><a href="mailto:adam@adampond.co.uk" target="_blank" rel="noopener noreferrer">adam@adampond.co.uk</a></p>
        <p><FontAwesomeIcon icon={faGithub} color="white" /><a href="https://github.com/adamponddesign" target="_blank" rel="noopener noreferrer">github.com/adamponddesign</a></p>
        <p><FontAwesomeIcon icon={faLinkedin} color="white" /><a href="https://www.linkedin.com/in/adam-pond/" target="_blank" rel="noopener noreferrer">linkedin.com/in/adam-pond/</a></p>
      </div>
    )
  }
}

export default Contact
