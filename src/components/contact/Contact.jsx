import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './contact.css'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {

    emailjs
      .sendForm('service_sk1zzq9', 'template_30x2vio', form.current, {
        publicKey: '518r1B-HX0__HbZaY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section className="contact section" id="contact">
      <h2 className='section-title'>Get in Touch</h2>
      <span className="section-subtitle">Contact Me</span>

      <div className="contact-container container grid">
        <div className="contact-content">
          <h3 className="contact-title">Talk To Me</h3>

          <div className="contact-info">
            <div className="contact-card">
              <i className="bx bx-mail-send contact-card-icon"></i>

              <h3 className="contact-card-title">Email</h3>
              <span className="contact-card-data">trav.whoami@gmail.com</span>

              <a href="" className="contact-button">Write me{" "} <i className="bx bx-right-arrow-alt contact-button-icon"></i></a>
            </div>

            <div className="contact-card">
              <i className="bx bx-mail-send contact-card-icon"></i>

              <h3 className="contact-card-title">Telegram</h3>
              <span className="contact-card-data">+959884178787</span>

              <a href="" className="contact-button">Write me{" "} <i className="bx bx-right-arrow-alt contact-button-icon"></i></a>
            </div>

            <div className="contact-card">
              <i className="bx bx-mail-send contact-card-icon"></i>

              <h3 className="contact-card-title">Messenger</h3>
              <span className="contact-card-data">Khant Thit Oo</span>

              <a href="https://www.facebook.com/profile.php?id=100092623333274" className="contact-button">Write me{" "} <i className="bx bx-right-arrow-alt contact-button-icon"></i></a>
            </div>
          </div>
        </div>

        <div className="contact-content">
          <h3 className="contact-title">Write me your project</h3>

          <form ref={form} className="contact-form" onSubmit={sendEmail}>
            <div className="contact-form-div">
              <label className="contact-form-tag">Name</label>
              <input type="text" name='name' className='contact-form-input' placeholder='Enter Your Name'/>
            </div>

            <div className="contact-form-div">
              <label className="contact-form-tag">Email</label>
              <input type="email" name='email' className='contact-form-input' placeholder='Enter Your Email'/>
            </div>

            <div className="contact-form-div contact-form-area">
              <label className="contact-form-tag">Project</label>
              <textarea name="project" cols="30" rows="10" className='contact-form-input' placeholder='Write your project'></textarea>
            </div>

            <button className="button button-flex"> 
              <i className="blah uil uil-message" style={{marginRight: '10px'}}></i> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact