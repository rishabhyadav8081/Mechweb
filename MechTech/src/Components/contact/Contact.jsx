import React from 'react'
import './contact.css'
import msg from '../../assets/msg-icon.png'
import mail from '../../assets/mail-icon.png'
import phone from '../../assets/phone-icon.png'
import location from '../../assets/location-icon.png'
import arrow from '../../assets/white-arrow.png'
function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "5ae50d5f-1a82-4293-92cd-bddcc51f6f57");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Email sent to Rishabh Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);

    }
  };
  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg} alt="" /></h3>
        <p>I believe that every interaction, no matter how small, has the potential to enrich our lives. Whether it's sharing thoughts, exchanging ideas, or simply offering a listening ear, connecting with others is what makes our journey meaningful.</p>
        <ul>
            <li><img src={mail} />rishabh14102005@gamil.com </li>
            <li><img src={phone} />+918081571171</li>
            <li><img src={location} />Hajratganj,Lucknow</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label> Your Name</label>
          <input type="text" name="name" placeholder='enter your name ' required />
          <label> Phone Number</label>
          <input type="tel" name="number" placeholder='enter your phone number ' required />
          <label> write msg you want to send </label>
          <textarea name="message" rows="6" placeholder='wriite your msg' required></textarea>
          <button className='btn dark-btn'>submit now <img src={arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
