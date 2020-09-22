import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const { name, email, message } = formState;

  function handleChange(e) {
    const { name, value } = e.target;
    let _errorMessage = '';

    if (name === 'email') {
      const isValid = validateEmail(value);
      _errorMessage = isValid ? '' : 'Your email is invalid';
    } else {
      _errorMessage = value.length ? '' : `${name} is required`;
    }

    setErrorMessage(_errorMessage);

    if (!_errorMessage) {
      setFormState({ ...formState, [name]: value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('formState :>> ', formState);
  }

  return (
    <section>
      <h1>Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            name="email"
            defaultValue={email}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            defaultValue={message}
            onBlur={handleChange}
            rows="5"
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
