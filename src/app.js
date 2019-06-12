import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma'
import './style.scss'

import Footer from './components/Footer'
import TechIcons from './components/TechIcons'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Interests from './components/Interests'

class App extends React.Component {
  render() {
    return (

      <main>

        <h1>Adam Pond</h1>
        <h2>Full Stack Developer</h2>
        <Experience />
        <TechIcons />
        <Interests />
        <Contact />
        <Footer />

      </main>

    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
