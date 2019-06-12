import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma'
import './style.scss'

import Footer from './components/Footer'
import TechIcons from './components/TechIcons'
import Contact from './components/Contact'

class App extends React.Component {
  render() {
    return (

      <main>

        <h1>Adam Pond</h1>
        <h2>Full Stack Developer</h2>
        <TechIcons />
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
