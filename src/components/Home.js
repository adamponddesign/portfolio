import React from 'react'

class Home extends React.Component {
  render() {
    return (
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container">
            <h1>
              <span className="brackets">{'<'}</span>
              <span>{'Adam Pond /'}</span>
              <span className="brackets">{'>'}</span>
            </h1>
            <h2 id="logo-sub">Full-Stack Developer</h2>

          </div>
        </div>
      </section>


    )
  }
}

export default Home
