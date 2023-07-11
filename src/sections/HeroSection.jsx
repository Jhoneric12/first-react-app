import React from 'react'
import '../styles/HeroSection.css'
import MyImage from '../assets/MyBro.png'
import {FaGithub, FaLinkedin, FaFacebook, FaGit} from "react-icons/fa";

function HeroSection() {
  return (
    <div className="container">
        <div className="content">
            <div className="first-column">
                <div className="link-icons">
                  <a href="https://github.com/Jhoneric12" target='blank'> <FaGithub className='icons'/></a>
                  <a href="https://www.linkedin.com/in/jhon-eric-aton-5535a8245/" target='blank'> <FaLinkedin className='icons'/></a>
                  <a href="https://www.facebook.com/jhoneric.aton" target='blank'> <FaFacebook className='icons'/></a>
                </div>
                <h1>I'm Jhon Eric Aton</h1>
                <h4>Aspiring Web Developer / Software Engineer</h4>
                <div className="buttons">
                  <button className="btnProjects">Projects</button>
                  <button className="btnAbout">About Me</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection