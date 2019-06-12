import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faJs, faPython, faHtml5, faCss3Alt, faSass, faNodeJs, faGithub} from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'

class Icons extends React.Component {
  render() {
    return (
      <ul className="tech-list">


        <li><FontAwesomeIcon icon={faReact} /><span className="tech-icons">ReactJS</span></li>
        <li><img src="https://i.imgur.com/w5lgW87.png" title="source: imgur.com" /><span className="tech-icons">Bulma</span></li>
        <li><FontAwesomeIcon icon={faJs} /><span className="tech-icons">JavaScript</span></li>
        <li><FontAwesomeIcon icon={faPython} /><span className="tech-icons">Python</span></li>
        <li><FontAwesomeIcon icon={faHtml5} /><span className="tech-icons">HTML5</span></li>
        <li><FontAwesomeIcon icon={faCss3Alt} /><span className="tech-icons">CSS3</span></li>
        <li><FontAwesomeIcon icon={faSass} /><span className="tech-icons">SASS</span></li>
        <li><FontAwesomeIcon icon={faNodeJs} /><span className="tech-icons">NodeJS</span></li>
        <li><FontAwesomeIcon icon={faDatabase} /><span className="tech-icons">NoSQL</span></li>
        <li><FontAwesomeIcon icon={faGithub} /><span className="tech-icons">GitHub</span></li>
        <li><i className="devicon-mongodb-plain"></i><span className="tech-icons">MongoDB</span></li>
        <li><i className="devicon-webpack-plain"></i><span className="tech-icons">Webpack</span></li>
        <li><i className="devicon-express-original"></i><span className="tech-icons">Express</span></li>
        <li><i className="devicon-atom-original"></i><span className="tech-icons">Atom</span></li>
        <li><i className="devicon-slack-plain"></i><span className="tech-icons">Slack</span></li>
        <li><i className="devicon-heroku-original"></i><span className="tech-icons">Heroku</span></li>
        <li><i className="devicon-postgresql-plain"></i><span className="tech-icons">PostgreSQL</span></li>

      </ul>
    )
  }
}

export default Icons
