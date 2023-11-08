import { useState } from 'react';
import styles from './ContactForm.module.css';
import React from 'react'

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [msg, setMsg] = useState("");

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const newMessage = {
      name: {name},
      email: {email},
      subject: {subject},
      message: {msg}
    }
    console.log(newMessage);
  };
  return (
    <div className={`${styles.formContainer} text-center p-7`}>
      <div className={`${styles.topTitle} text-orange`}>HAVE ANY QUESTION?</div>
      <div className={styles.title}>Contact Form</div>

      <form
        className="text-center d-flex flex-column m-3"
        onSubmit={submitHandler}
      >
        <input
          id={styles.name}
          type="text"
          placeholder="Your Name"
          value= {name}
          onChange={(e) => setName(e.target.value)}
/>
        <input
          id={styles.email}
          type="text"
          value={email}
          placeholder="Your Email"
          onChange={(e) => setEmail(e.target.value)}
/>
        <input
          id={styles.subject}
          type="text"
          value={subject}
          placeholder="Your Subject"
          onChange={(e) => setSubject(e.target.value)}
/>
        <textarea
          id={styles.message}
          name=""
          cols={30}
          rows={8}
          value={msg}
          placeholder="Your Message"
          onChange={(e) => setMsg(e.target.value)}
></textarea>
        <button className="bg-orange text-white">SEND A MESSAGE</button>
      </form>
    </div>
  );
}

