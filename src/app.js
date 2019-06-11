import React from 'react'
import ReactDOM from 'react-dom'
import './style.scss'

import Footer from './components/Footer'
import Icons from './components/Icons'

class App extends React.Component {
  render() {
    return (

      <main>
        <h1>Adam Pond Portfolio!</h1>
        <Icons />
        <Footer />
      </main>

    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
