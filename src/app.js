import React from 'react'
import ReactDOM from 'react-dom'
import './style.scss'

import Footer from './components/Footer'
import Icons from './components/Icons'
import Contact from './components/Contact'

class App extends React.Component {
  render() {
    return (

      <main>
        <body>
          <h1>Adam Pond</h1>
          <h2>Full Stack Developer</h2>
          <Icons />
          <Contact />
          <Footer />
        </body>
      </main>

    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
