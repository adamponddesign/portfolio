import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell, faPaw, faMusic, faFutbol } from '@fortawesome/free-solid-svg-icons'


class Interests extends React.Component {
  render() {
    return (
      <div id="interests" className="section interests-section">
        <div className="container">

          <h2>{'< Other Interests >'}</h2>
          <div className="interests-list columns">
            <div className="column is-half-tablet is-one-quarter-desktop is-full-mobile">
              <FontAwesomeIcon icon={faMusic} />
              <p className="interests-icons">I love music, and regularly play gigs around London.  I sing, play piano and guitar.</p>
            </div>
            <div className="column is-half-tablet is-one-quarter-desktop is-full-mobile">
              <FontAwesomeIcon icon={faPaw} />
              <p className="interests-icons">{'I have a black cocker spaniel called Jarvis.  He can be a handful at times, but is very lovable.'}</p>
            </div>
            <div className="column is-half-tablet is-one-quarter-desktop is-full-mobile">
              <FontAwesomeIcon icon={faDumbbell} />
              <p className="interests-icons">I find regular trips to the gym boost my self-confidence and benefit many other areas of my life .</p>
            </div>
            <div className="column is-half-tablet is-one-quarter-desktop is-full-mobile">
              <FontAwesomeIcon icon={faFutbol} />
              <p className="interests-icons">{'I follow Manchester United, and have great memories of going to games at Old Trafford with my Dad when I was younger'}</p>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Interests
