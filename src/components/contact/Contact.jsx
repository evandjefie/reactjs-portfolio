import "./contact.scss";
import { useState } from "react";

export default function Contact() {

    const [message, setMessage] = useState(false)
    const handleClick = (e)=>{
        e.preventDefault();  // Utilisé pour éviter que le bouton du formulaire recharge la page
        setMessage(true);
    }

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="/assets/dev/web1.jpg" alt="" />
      </div>
      <div className="right">
        <h1>Contact</h1>
        <form onSubmit={handleClick}>
          <input type="text" name="text" placeholder="Your Email" />
          <textarea placeholder="Enter your message here" />
          <button type="submit">Send</button>
          {message && <span>Thank you for your consideration, I will get back to you as soon as possible ;)</span>}
        </form>
      </div>
    </div>
  );
}
