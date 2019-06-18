import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma'
import './style.scss'
import { BreakpointProvider } from 'react-socks'

import Navbar from './components/Navbar'
import Home from './components/Home'
import Experience from './components/Experience'
import TechIcons from './components/TechIcons'
import Projects from './components/Projects'
import Interests from './components/Interests'
import Contact from './components/Contact'
import Footer from './components/Footer'

class App extends React.Component {
  render() {
    return (

      <main>
        <BreakpointProvider>
          <Navbar />
        </BreakpointProvider>
        <Home />
        <Experience />
        <TechIcons />
        <Projects />
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
