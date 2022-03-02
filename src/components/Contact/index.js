import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function ContactForm() {
  // React Hook, clear the input fields on the component loading
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  // destructure the formState object into its named properties, name, email, and message
  const { name, email, message } = formState;

  const [errorMessage, setErrorMessage] = useState("");

  // Form change handler
  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      // console.log(isValid);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }

    // console.log("errorMessage", errorMessage);

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  //   console.log(formState);

  // Form submit event handler
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  // JSX
  return (
    <section>
      <p>
        This contact form is currently not fuctional. <br />
        <br />
        If you would like to contact me please email me directly at
        peterbenjaminwarren@gmail.com.
        <br />
        <br />
        You can also visit my GitHub and LinkedIn accounts via the links at the
        bottom of the page
      </p>
      <br />
      <br />
      <h1>*NOT FUNCTIONAL*</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        {/* // name input */}
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            onBlur={handleChange}
          />
        </div>
        {/* // email input */}
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            name="email"
            defaultValue={email}
            onBlur={handleChange}
          />
        </div>
        {/* // message text area */}
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            rows="5"
            defaultValue={message}
            onBlur={handleChange}
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
