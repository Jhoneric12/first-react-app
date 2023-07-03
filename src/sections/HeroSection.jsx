import React from 'react'
import '../styles/HeroSection.css'

function HeroSection() {
  return (
    <div className="container">
        <div className="content">
            <div className="first-column">
                <h4>Hi peeps,</h4>
                <h1>I'm Jhon Eric Aton</h1>
                <h4>Aspiring Web Developer / Software Engineer</h4>
                <div className="buttons">
                  <button className="btnProjects">Projects</button>
                  <button className="btnAbout">About Me</button>
                </div>
            </div>
            <div className="hero-image">
                <img src="./public/MyBro.png" alt="Jhon Eric Aton" />
            </div>
        </div>
    </div>
  )
}

export default HeroSection