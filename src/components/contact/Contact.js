import "./contact.scss";
import { useState } from "react";
import {GitHub, LinkedIn} from "@material-ui/icons";
import emailjs from "emailjs-com"


export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);

    emailjs.sendForm('gmail', 'template_23tzhvq', e.target, 'user_OQf9sC09ZCWyRl4MF5CCI')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
       
        <div className="list">
        
          
          <ul>  <LinkedIn className="icon-link"/> <a href="https://www.linkedin.com/in/shivam-nanda-141573136/"> LinkedIn</a> </ul>
      
          <ul> <GitHub className="icon-git"/> <a href="https://github.com/Shivam242001">GitHub </a> </ul>

      </div>
       
      <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Type Your Email" name="email"/>
          <textarea placeholder="Message" name="message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
      

    </div>
  );
}
  