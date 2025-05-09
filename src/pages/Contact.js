import { useState } from "react";
import styles from "./Contact.module.css";
import Button from "../components/Button";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.heading}>Contact Us</h1>
      <p className={styles.subheading}>
        Have questions about our weather app? Need help with something specific?
        Drop us a message and we'll get back to you as soon as possible.
      </p>

      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={styles.input}
            placeholder="Pulakesh Malakar"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={styles.input}
            placeholder="pulakeshmalakar.official@gmail.com"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="subject" className={styles.label}>
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={styles.input}
            placeholder="How can we help you?"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.label}>
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={styles.textarea}
            placeholder="Tell us more about your inquiry..."
            required
          />
        </div>

        <Button type="submit" className={styles.submitButton}>
          Send Message
        </Button>
      </form>

      <div className={styles.contactInfo}>
        <div className={styles.infoItem}>
          <div className={styles.infoIcon}>📧</div>
          <h3 className={styles.infoTitle}>Email</h3>
          <p className={styles.infoText}>
            <a
              href="pulakeshmalakar.official@gmail.com"
              className={styles.infoLink}
            >
              pulakeshmalakar.official
            </a>
          </p>
        </div>

        <div className={styles.infoItem}>
          <div className={styles.infoIcon}>📱</div>
          <h3 className={styles.infoTitle}>Phone</h3>
          <p className={styles.infoText}>
            <a href="tel:+91 7578069920" className={styles.infoLink}>
              +91 75780 69920
            </a>
          </p>
        </div>

        <div className={styles.infoItem}>
          <div className={styles.infoIcon}>🏢</div>
          <h3 className={styles.infoTitle}>Office</h3>
          <p className={styles.infoText}>
            Hajo
            <br />
            Guwahati, Assam
            <br />
            India
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
