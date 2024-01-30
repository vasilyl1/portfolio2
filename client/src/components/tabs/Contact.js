import React, { useState, useEffect } from 'react';
import { validateEmail } from '../utils/helpers';
import ReCAPTCHA from 'react-google-recaptcha';
import env from 'react-dotenv';

function Contact() {
  // Create state variables for the fields in the form
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');
  const [resultMessage, setResultMessage] = useState('');

  // this state is used to save validated json data to be sent to the backend
  const [api, setApi] = useState(null);

  // this state is to use google captcha
  const [captchaToken, setCaptchaToken] = useState(null);
  const [captchaSuccess, setCaptchaSuccess] = useState(false);

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };


  // Verify the CAPTCHA token with the backend
  useEffect(() => {
    const verifyCaptcha = async () => {
      if (captchaToken) {//call backend only if there is a token
        try {
          const response = await fetch('/api/captcha', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token: captchaToken }),
          });
          const data = await response.json();
          // Proceed with further action based on the verification response
          setCaptchaSuccess(data.success);
        } catch (err) {
          console.error(err);
        }
      } else {
        setCaptchaSuccess(false);
      };
    };
    verifyCaptcha();
  }, [captchaToken]);


  // this hook will run every time the api state is updated. api state contains validated form data
  useEffect(() => {
    const abc = async () => {
      if (api) { // call backend only if there is data in the state
        try {
          await fetch('/api/comment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(api),
          });
        } catch (err) {
          console.error(err);
        }
        setApi(null);
      }
    };
    abc();
  }, [api]);

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'Your Name') {
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
      ? setResultMessage(`${inputType} is a required field`)
      : setResultMessage(``);
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !userName) {
      setResultMessage('Please enter your name and valid e-mail');
      // exit out of this code block if something is wrong so that the user can correct it
      return;
    } else {
      setResultMessage('Thank you for leaving your message!');
      setApi({ userName, email, message });
    }

    // If everything goes according to plan, clear out the input after a successful registration.
    setUserName('');
    setMessage('');
    setEmail('');
  };

  return (
    <form>

      <div className='mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8'>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base text-lg font-semibold leading-7 text-gray-900">Contact Me</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Hello {userName}! Please leave your message below:
            </p>


            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                  Your Name: {userName}
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="userNameInput"
                      name="Your Name"
                      id="username"
                      value={userName}
                      onChange={handleInputChange}
                      onBlur={handleMoveOut}
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="name"
                    />
                  </div>
                </div>
              </div>


              <div className="sm:col-span-4">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Your email: {email}
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={handleInputChange}
                      onBlur={handleMoveOut}
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="email"
                    />
                  </div>
                </div>
              </div>



              <div className="col-span-full">
                <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">
                  Your Message: {message}
                </label>
                <div className="mt-2">
                  <textarea
                    id="message"
                    name="Your Message"
                    value={message}
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={handleInputChange}
                    onBlur={handleMoveOut}
                    placeholder="Type your message here"
                  />
                </div>
              </div>


            </div>



            {resultMessage && (
              <div>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  {resultMessage}
                </p>
              </div>
            )}

          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">


          {/* Show the submit button only when the captcha is passed */}
          {captchaSuccess
            ?
            (<button
              type="submit"
              onClick={handleFormSubmit}
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Submit
            </button>)
            :
            (
              /* Render the reCAPTCHA component only when it is required */
              <ReCAPTCHA
                sitekey={env.CAPSITE}
                onChange={handleCaptchaChange}
              />
            )
          }

        </div>


      </div>
    </form>


  );
}

export default Contact;