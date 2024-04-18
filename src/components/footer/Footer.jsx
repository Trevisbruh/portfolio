import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <h1 className="footer-title">TREV</h1>

        <ul className="footer-list">
          <li>
            <a href="#about" className='footer-link'>About</a>
          </li>

          <li>
            <a href="#portfolio" className='footer-link'>Projects</a>
          </li>

          <li>
            <a href="#contact" className='footer-link'>Contact</a>
          </li>
        </ul>

        <div className="footer-social">
          
        </div>

      </div>
    </footer>
  )
}

export default Footer