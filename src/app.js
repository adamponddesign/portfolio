import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma'
import './style.scss'
import { setDefaultBreakpoints } from 'react-socks'
import { BreakpointProvider } from 'react-socks'

import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Experience from './components/Experience'
import TechIcons from './components/TechIcons'
import Projects from './components/Projects'
import Interests from './components/Interests'
import Contact from './components/Contact'
import Footer from './components/Footer'

setDefaultBreakpoints([
  { xs: 0 },
  { s: 376 },
  { m: 425 },
  { l: 769 },
  { xl: 1025 }
])


class App extends React.Component {
  render() {
    return (

      <main>
        <BreakpointProvider>
          <Navbar />
        </BreakpointProvider>
        <Home />
        <About />
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
