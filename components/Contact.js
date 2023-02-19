import { all } from 'axios'
import { useRef, useState } from 'react'
import styles from '../styles/Contact.module.css'
import { BsTelephone, BsGlobe2 } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import emailjs from '@emailjs/browser';

function Contact() {
    // const [formValue, setFormValue] = useState({ username: '', email: '', number: '', message: '' })

    const handleInput = (e) => {
        // const { name, value } = e.target;
        // setFormValue({ ...formValue, [name]: value })
    }

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const allInputValue = { username: formValue.username, email: formValue.email, number: formValue.number, message: formValue.message };
    //     console.log(allInputValue);

    //     let res = await fetch("http://localhost:5000/api/contact", {
    //         method: "POST",
    //         headers: { 'content-type': 'application/json' },
    //         body: JSON.stringify(allInputValue)
    //     });
    // }

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_do9zgds', 'template_e5jhlks', form.current, 'dF4J0brR81hi-kHRG')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    return (
        <div className={styles.container}>
            <div data-aos="fade-right" className={styles.contactLinks}>
                <div className={styles.medium}>
                    <BsTelephone color="#2F80ED" /> Call us
                    <div style={{
                        marginTop: "15px",
                        fontWeight: "300",
                        fontSize: "20px",
                        lineHeight: "24px",
                        textAlign: "center",
                    }}>
                        +91 93545 66860
                    </div>
                </div>
                <div className={styles.medium}>
                    <CiLocationOn color="#2F80ED" /> Location
                    <div style={{
                        marginTop: "15px",
                        fontWeight: "300",
                        fontSize: "20px",
                        lineHeight: "24px",
                        textAlign: "center",
                    }}>
                        Ghaziabad, Uttar Pradesh
                    </div>
                </div>
                <div className={styles.medium}>
                    <BsGlobe2 color="#2F80ED" /> Mail Us
                    <div style={{
                        marginTop: "15px",
                        fontWeight: "300",
                        fontSize: "20px",
                        lineHeight: "24px",
                        textAlign: "center",
                    }}>
                        info@markall.in
                    </div>
                </div>
            </div>

            <div data-aos="fade-left" className={styles.contactForm}>
                {/* <form onSubmit={handleSubmit}> */}
                <form ref={form} onSubmit={sendEmail} >
                    <div className={styles.contactHeader}>
                        <span style={{
                            marginTop: "15px",
                            fontWeight: "600",
                            fontSize: "48px",
                            lineHeight: "68px",
                            color: "#000000"
                        }}>
                            Contact Now
                        </span><br />
                        In diam consequat nec eu. Eu sem nec vel, sollicitudin ipsum viverra sed nibh amet. Nunc, et pharetra, duis tortor dictum nisl. Id vestibulum tincidunt adipiscing gravida risus.
                    </div>

                    <div className={styles.fieldsContainer}>
                        <div className={styles.inputGroup}>
                            <input
                                className={styles.dataFields}
                                type="username"
                                name="user_name"
                                placeholder="Name*"
                                // value={formValue.username}
                                // onChange={handleInput}/
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <input
                                className={styles.dataFields}
                                type="text"
                                name="user_email"
                                placeholder="Email*"
                                // value={formValue.email}
                                // onChange={handleInput}
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <input
                                className={styles.dataFields}
                                type="text"
                                name="user_number"
                                placeholder="Phone*"
                                // value={formValue.number}
                                // onChange={handleInput}
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <input
                                className={styles.dataFields}
                                type="text"
                                name="message"
                                placeholder="Message*"
                                // value={formValue.message}
                                // onChange={handleInput}
                            />
                        </div>
                        <button className={styles.submitBtn} type="submit">Submit Form</button>
                    </div>
                </form>
            </div >
        </div >
    )
}

export default Contact