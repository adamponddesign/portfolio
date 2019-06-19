import React from 'react'



class Experience extends React.Component {
  render() {
    return (

      <div id="experience" className="section experience-section transition active">
        <div className="container">

          <h2>{'< Experience />'}</h2>

          <div className="columns is-vcentered has-text-centered" >

            <div className="column">

              <img id="ga-logo" src="https://i.imgur.com/h9VO4Zm.png" />



            </div>

            <div className="column">
              <h3>Software Engineering Immersive</h3>
              <p className="text-color">March - June 2019</p>
              <p>The three month full-time course at General Assembly was a great opportunity to build rich, interactive, full-stack apps with key languages and dive into algorithms, data structures, design patterns, APIs, and more.
I gained a lot of self-confidence, proving to myself that working alone or in a group, I have the skills and attitude to achieve challenging tasks within a set time period.</p>
              <hr />
              <h4>Mike Hayden</h4>
              <p className="text-color">Head of Department at General Assembly</p>
              <p>{'"Adam was a pleasure to work with. He has a great mentality for programming and always rose to every challenge set. I am sure he has a great future ahead as a web developer."'}</p>

            </div>






          </div>


        </div>
      </div>


    )
  }
}

export default Experience
