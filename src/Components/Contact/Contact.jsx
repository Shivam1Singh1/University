import React from 'react';
import './Contact.css';
import msgIcon from '../../assets/msg-icon.png';
import mailIcon from '../../assets/mail-icon.png';
import phoneIcon from '../../assets/phone-icon.png';
import locationIcon from '../../assets/location-icon.png';
import whiteArrow from '../../assets/white-arrow.png';

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
        formData.append("access_key", "efc4873c-59fb-4cca-ba5e-b8333ba5f50b");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className='contact'>
            <div className="contact-col">
                <h3>
                    Send us a message
                    <img src={msgIcon} alt="Message Icon" />
                </h3>
                <p>
                    Thank you for your support! Your feedback is crucial for our college's growth.
                    Take a moment to share your thoughts; together, we can enhance our services,
                    ensuring your satisfaction. Your input is valued, and we eagerly await hearing from you soon!
                </p>
                <ul>
                    <li>
                        <img src={mailIcon} alt="Mail Icon" />
                        Contact@shivamsingh16mar@gmail.com
                    </li>
                    <li>
                        <img src={phoneIcon} alt="Phone Icon" />
                        +91 2917 2281
                    </li>
                    <li>
                        <img src={locationIcon} alt="Location Icon" />
                        15 Walton City, Miami<br />
                        01-425, United States
                    </li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>Your Name</label>
                    <input type="text" name='name' placeholder='Enter your name' required />

                    <label>Phone Number</label>
                    <input type="tel" name='phone' placeholder='Enter your mobile number' required />

                    <label>Your Message</label>
                    <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>

                    <button type='submit' className='btn dark-btn'>
                        Submit now
                        <img src={whiteArrow} alt="White Arrow" />
                    </button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    );
};

export default Contact;
