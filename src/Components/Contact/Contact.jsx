import React from 'react';
import './Contact.css';

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
                    <img src="src/assets/msg-icon.png" alt="" />
                </h3>
                <p>
                    Thank you for your support! Your feedback is crucial for our college's growth.
                    Take a moment to share your thoughts; together, we can enhance our services,
                    ensuring your satisfaction. Your input is valued, and we eagerly await hearing from you soon!
                </p>
                <ul>
                    <li>
                        <img src="src/assets/mail-icon.png" alt="" />
                        Contact@shivamsingh16mar@gmail.com
                    </li>
                    <li>
                        <img src="src/assets/phone-icon.png" alt="" />
                        +91 2917 2281
                    </li>
                    <li>
                        <img src="src/assets/location-icon.png" alt="" />
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
                        <img src="src/assets/white-arrow.png" alt="" />
                    </button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    );
};

export default Contact;
