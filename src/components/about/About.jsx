import React from 'react'
import './about.css'
import aboutImg from '../../assets/profile.jpg'
import Info from './Info'

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section-title">About Me</h2>
      <span className="section-subtitle">My introduction</span>

      <div className="about-container container grid">
        <img src={aboutImg} alt="" className="about-img" />

        <div className="about-data">
          <Info />

          <p className="about-description">Hello there! I'm Trev Brown, a passionate web developer with expertise in crafting dynamic and responsive websites and applications. With a strong foundation in HTML, CSS, and JavaScript, coupled with proficiency in React and React Native, I specialize in bringing your ideas to life with intuitive user interfaces and seamless user experiences.</p>

          <a href="#portfolio" className="button button-flex">View Projects <i style={{fontSize: '20px', marginLeft: '10px'}} className="uil uil-file"></i></a>
        </div>
      </div>
    </section>
  )
}

export default About