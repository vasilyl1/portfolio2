import React, { useState } from 'react';
import '../../styles/Style.css';
import { validateEmail } from '../utils/helpers';

function Contact() {
  // Create state variables for the fields in the form
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');
  const [resultMessage, setResultMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };
  const handleMoveOut = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, set the state of either email, username, and password
     (inputValue === '') 
     ?  setResultMessage(`${inputType} is a required field`)
     :  setResultMessage(``);
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !userName) {
      setResultMessage('Please enter your name and valid e-mail');
      // exit out of this code block if something is wrong so that the user can correct it
      return;
      // check to see if the password is not valid. If so, set an error message regarding the password.
    } else {
      setResultMessage('Thank you for leaving your message!');
    }

    // If everything goes according to plan, clear out the input after a successful registration.
    setUserName('');
    setMessage('');
    setEmail('');
  };

  return (
    <div className='n2body-left-2'>
      <h1>Contact</h1>
     
      <form className="form">
      <p>Hello {userName}! Please leave your message:</p>
        <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          onBlur={handleMoveOut}
          type="text"
          placeholder="name"
        />
        <p>Your email: {email}</p>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          onBlur={handleMoveOut}
          type="email"
          placeholder="email"
        />
        <p>Your message: {message}</p>
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          onBlur={handleMoveOut}
          type="message"
          placeholder="Your message here"
          className='inputMessage'
        />
        <button className='nav-link' type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {resultMessage && (
        <div>
          <p className="error-text">{resultMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;