import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faJs, faPython, faHtml5, faCss3Alt, faSass, faNodeJs, faGithub, faTrello, faYarn, faNpm} from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'


class TechIcons extends React.Component {
  render() {
    return (

      <div className="section tech-icons-section">
        <div className="container">

          <ul className="tech-list">


            <li><FontAwesomeIcon icon={faReact} /><span className="tech-icons">ReactJS</span></li>
            <li><FontAwesomeIcon icon={faJs} /><span className="tech-icons">JavaScript</span></li>
            <li><FontAwesomeIcon icon={faPython} /><span className="tech-icons">Python</span></li>
            <li><FontAwesomeIcon icon={faHtml5} /><span className="tech-icons">HTML5</span></li>
            <li><FontAwesomeIcon icon={faCss3Alt} /><span className="tech-icons">CSS3</span></li>
            <li><FontAwesomeIcon icon={faSass} /><span className="tech-icons">SASS</span></li>
            <li><FontAwesomeIcon icon={faNodeJs} /><span className="tech-icons">NodeJS</span></li>
            <li><FontAwesomeIcon icon={faDatabase} /><span className="tech-icons">NoSQL</span></li>
            <li><FontAwesomeIcon icon={faGithub} /><span className="tech-icons">GitHub</span></li>
            <li><i className="devicon-postgresql-plain"></i><span className="tech-icons">PostgreSQL</span></li>
            <li><i className="devicon-mongodb-plain"></i><span className="tech-icons">MongoDB</span></li>
            <li><i className="devicon-webpack-plain"></i><span className="tech-icons">Webpack</span></li>
            <li><i className="devicon-express-original"></i><span className="tech-icons">Express</span></li>
            <li><FontAwesomeIcon icon={faNpm} /><span className="tech-icons">npm</span></li>
            <li><FontAwesomeIcon icon={faYarn} /><span className="tech-icons">yarn</span></li>
            <li><i className="devicon-atom-original"></i><span className="tech-icons">Atom</span></li>
            <li><img src="https://i.imgur.com/oRBJkaQ.png"/><span className="tech-icons">Bulma</span></li>
            <li><i className="devicon-heroku-original"></i><span className="tech-icons">Heroku</span></li>
            <li><i className="devicon-slack-plain"></i><span className="tech-icons">Slack</span></li>
            <li><FontAwesomeIcon icon={faTrello} /><span className="tech-icons">Trello</span></li>
            <li><img src="https://i.imgur.com/7eQd2rq.png"/><span className="tech-icons">Logic Pro X</span></li>
            <li><img src="https://i.imgur.com/L37hM3E.png"/><span className="tech-icons">Photoshop</span></li>
            <li><img src="https://i.imgur.com/vqYsLkV.png"/><span className="tech-icons">After Effects</span></li>

          </ul>

        </div>
      </div>

    )
  }
}

export default TechIcons
