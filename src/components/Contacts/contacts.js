import React,{useRef,useState} from 'react'
import "./contacts.css"
import lingedInlogo from '../../assets/linkedInlogo.png'
import github from '../../assets/github.png'
import emailjs from '@emailjs/browser';
import { Fade } from 'react-awesome-reveal';

function Contacts() {
    const form = useRef();
    const [message, setMessage] = useState("");
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_xvrr99k', 'template_ji0qyb6', form.current, {
            publicKey: 'fM9DkKDFpIGMtgwop',
          })
          .then(
            () => {
                setMessage("Message sent successfully!");
                e.target.reset();
                setTimeout(() => setMessage(""), 3000);
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
  return (
   <section id='contact'>
    <h1 className='contact-title'>Contact Me</h1>
   <div className="contact-section">
   <Fade direction="right">
    <div className="contact-left">
    <h2>Let's talk!</h2>
    <p className='contact-info'>I'm currently available to take on new projects, so feel free to contact me for any new opportunities.</p>
     <div className="contact-details">
        <p>panjalianju555@gmail.com</p>
        <p>+971 543651795</p>
        <p>Sharjah,UAE</p>
     </div>
    </div>
    <div className="contact-right">
    <span className="message-container">
          {message && <p className="messageBox">{message}</p>}
        </span>
    <form ref={form} onSubmit={sendEmail}>
        <input type='text'
         className="name"
         placeholder="Enter your name"
         name="your_name"
         required
        />
         <input
                type="email"
                className="email"
                placeholder="Enter your email"
                name="your_email"
                required
              />
              <textarea
                name="message"
                rows={5}
                placeholder="Enter your message"
                className="msg"
                required
              />
              <button type="submit" className="submitBtn" value= "">Submit</button>
    </form>
    </div>
    </Fade>
   </div>
   <div className="links">
          <a
            href="https://www.linkedin.com/in/anjali-p-1b5443126/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={lingedInlogo} alt="linkedIn" className="link" />
          </a>
          <a
            href="https://github.com/anjalip123/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={github} style={{backgroundColor:"white"}} alt="linkedIn" className="link" />
          </a>
        </div>
   </section>
  )
}

export default Contacts
