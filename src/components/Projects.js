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


          <div className="columns is-vcentered has-text-centered" >
            <div className="column">

              <h3>Edmiston</h3>
              <p className="project-paragraph">
              Developed fully responsive intranet designs using the very latest technologies. 
              Designs incorporated brand fonts/colours and included animations, image overlays, tables, bespoke swipe galleries and an employee search / filter.
              
              </p>
              <p className="text-color">JavaScript(ES6) | Svelte | Sapper | Rollup | Webpack | HTML5 | SCSS | Bulma </p>

             

            </div>
            <div className="column is-two-thirds edmiston">

              <img className="edmiston-images" src="https://i.imgur.com/SLDL3al.jpg" />
              <img className="edmiston-images" src="https://i.imgur.com/vcaBx8j.jpg" />
              <img className="edmiston-images" src="https://i.imgur.com/uMPF6rE.jpg" />

            </div>
          </div>
          




          <hr />

          <div className="columns is-vcentered has-text-centered" >
            <div className="column">

              <h3>Progress Pro</h3>
              <p className="project-paragraph">
              Solo project.  7 days.  A fully responsive application for use when training in the Gym.
              Users can register, login, add multiple programmes of their own, and track weights lifted over time.
              Python/Flask/PostgreSQL back-end and a React front-end utilising Webpack.
              </p>
              <p className="text-color">JavaScript(ES6) | Python3 | React | Webpack | PostgreSQL | Flask | Ajax | HTML5 | Bulma | SCSS | GitHub</p>

              <a className="button" href="https://github.com/adamponddesign/progress-pro" target="_blank" rel="noopener noreferrer" >
                <FontAwesomeIcon icon={faGithub} />
                <span>View on GitHub</span>
              </a>
              <a className="button" href="https://progress-pro.herokuapp.com" target="_blank" rel="noopener noreferrer" >
                <FontAwesomeIcon icon={faLink} />
                <span>View live Site</span>
              </a>

            </div>
            <div className="column is-two-thirds">

              <img className="apple-items" src="https://i.imgur.com/hBh3x9n.png" />

            </div>
          </div>


          <hr />


          <div className="columns is-vcentered has-text-centered" >
            <div className="column">

              <h3>After Midnight</h3>
              <p className="project-paragraph">{'Pair coding project.  5 days.  A map based site highlighting venues around London that are open after midnight.  A full-stack application with a React front-end and noSQL database.'}</p>
              <p className="text-color">JavaScript (ES6) | React | Webpack | MongoDB/Mongoose | Express | Ajax | HTML5 | Bulma | SCSS | GitHub | React Select | ReactMapBox-GL</p>

              <a className="button" href="https://github.com/adamponddesign/after-midnight" target="_blank" rel="noopener noreferrer" >
                <FontAwesomeIcon icon={faGithub} />
                <span>View on GitHub</span>
              </a>
              <a className="button" href="https://after-midnight.herokuapp.com" target="_blank" rel="noopener noreferrer" >
                <FontAwesomeIcon icon={faLink} />
                <span>View live Site</span>
              </a>

            </div>
            <div className="column is-two-thirds">

              <img className="imac-image" src="https://i.imgur.com/XDEWOpK.png" />

            </div>
          </div>
          <hr />

          <div className="columns is-vcentered has-text-centered" >
            <div className="column">

              <h3>London Trains Info</h3>
              <p className="project-paragraph">Pair coding project.  2 days.  An application which provides departure and arrival times for Railway stations across London.  The data is obtained from the transportAPI.</p>
              <p className="text-color">React | JavaScript | HTML5 | SCSS | Webpack | Axios | Bulma | GitHub | Insomnia</p>




              <a className="button" href="https://github.com/adamponddesign/london-trains" target="_blank" rel="noopener noreferrer" >
                <FontAwesomeIcon icon={faGithub} />
                <span>View on GitHub</span>
              </a>
              <a className="button" href="https://adamponddesign.github.io/london-trains" target="_blank" rel="noopener noreferrer" >
                <FontAwesomeIcon icon={faLink} />
                <span>View live Site</span>
              </a>

            </div>
            <div className="column is-two-thirds">

              <img className="imac-image" src="https://i.imgur.com/6lk3WkJ.png" />

            </div>
          </div>
          <hr />

          <div className="columns is-vcentered has-text-centered" >
            <div className="column">

              <h3>Mastermind</h3>
              <p className="project-paragraph">{'Solo Project.  7 Days.  Mastermind is a simple front-end game based on the classic 1970\'s board game. The aim of the game is to guess the 4 colour code that has been randomly created by the computer.  '}
              </p>
              <p className="text-color">HTML5 | CSS3 | JavaScript | GitHub</p>


              <a className="button" href="https://github.com/adamponddesign/mastermind" target="_blank" rel="noopener noreferrer" >
                <FontAwesomeIcon icon={faGithub} />
                <span>View on GitHub</span>
              </a>
              <a className="button" href="https://adamponddesign.github.io/mastermind" target="_blank" rel="noopener noreferrer" >
                <FontAwesomeIcon icon={faLink} />
                <span>View live Site</span>
              </a>

            </div>
            <div className="column is-two-thirds">

              <img className="iphone-image" src="https://i.imgur.com/yOC2TtT.png" />

            </div>
          </div>











        </div>
      </div>


    )
  }
}

export default Projects
