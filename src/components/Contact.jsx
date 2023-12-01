import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("mzblgrrn");
  if (state.succeeded) {
    return (
      <p>
        Thank you for your interest, I'll be sure to get back to you as soon as
        possible!
      </p>
    );
  }

  return (
    <div id="contact-section" className="portfolio-section">
      <h3>Contact Me</h3>
      <hr/>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" name="name" />
        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label htmlFor>Your Message</label>
        <textarea id="message" name="message" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
