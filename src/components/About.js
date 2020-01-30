import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faKeyboard } from '@fortawesome/free-solid-svg-icons'
class About extends React.Component {
  render() {
    return (
      <div id="about" className="section">
        <div className="container">

          <h2>{'< About />'}</h2>


          <p>
            {'Hello, my name\'s Adam. I\'m a full-stack web developer based in central London.  I\'m currently searching for an exciting opportunity to combine my technical and creative coding capabilities.'}
          </p>
          <p>
            {'Prior to Web Development, I worked as a full-time musician for 7 years and before that, I was a Professional Golfer.'}
          </p>
          <hr />

          <h3 className="about-headers">{'Skills I\'m Currently Improving'}</h3>
          <ul className="tech-list">
            <li><FontAwesomeIcon icon={faReact} /><span className="tech-icons">React</span></li>
            <li><img id="codewars-image" src="https://i.imgur.com/jjsSPOM.png"/><span className="tech-icons">Codewars</span></li>
            <li><FontAwesomeIcon icon={faKeyboard} /><span className="tech-icons">Touch Typing</span></li>

          </ul>
          <h3 className="about-headers">{'New Things I\'m Learning'}</h3>
          <ul className="tech-list">
            <li><img id="svelte-image" src="https://i.imgur.com/qNnvpgV.png"/><span id="new-text" className="tech-icons">Svelte / Sapper</span></li>

          </ul>

        </div>
      </div>

    )
  }
}

export default About
