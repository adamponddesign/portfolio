import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma'
import './style.scss'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import TechIcons from './components/TechIcons'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Interests from './components/Interests'
import Home from './components/Home'

class App extends React.Component {
  render() {
    return (

      <main>
        <Navbar />
        <Home />
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
