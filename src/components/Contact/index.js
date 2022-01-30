import React, { useState } from "react";

function ContactForm() {
  // React Hook, clear the input fields on the component loading
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  // destructure the formState object into its named properties, name, email, and message
  const { name, email, message } = formState;

  // Form change handler
  function handleChange(e) {
    setFormState({...formState, [e.target.name]: e.target.value })
  }

  console.log(formState);

  // JSX
  return (
    <section>
      <h1>Contact me</h1>
      <form id="contact-form">
        {/* // name input */}
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" defaultValue={formState.name} onChange={handleChange} />
        </div>
        {/* // email input */}
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" name="email" defaultValue={formState.email} onChange={handleChange} />
        </div>
        {/* // message text area */}
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="5" defaultValue={formState.message} onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
