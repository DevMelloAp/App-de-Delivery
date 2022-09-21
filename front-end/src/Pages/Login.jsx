import React, { useState } from 'react';
import styles from '../styles/login.module.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [enableButton, setEnableButton] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPass, setIsValidPass] = useState(false);

  const validateEmail = (emailValue) => {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailValidator = regexEmail.test(emailValue);
    return mailValidator;
  };

  const validatePassword = (passwordValue) => {
    const passMinLength = 5;
    const passValid = passwordValue.length > passMinLength;
    return passValid;
  };

  const handleChange = ({ target }) => {
    const { name } = target;
    const { value } = target;
    if (name === 'email') {
      setEmail(value);
      setIsValidEmail(validateEmail(value));
    }
    if (name === 'password') {
      setPassword(value);
      setIsValidPass(validatePassword(value));
    }

    const btnEnable = (isValidEmail && isValidPass);
    if (!btnEnable) setEnableButton(false);
    if (btnEnable) setEnableButton(true);
  };

  return (
    <div className={ styles.loginPage }>
      <div className={ styles.content }>
        <div className={ styles['content-two'] }>
          <p>Login</p>
          <input
            type="email"
            name="email"
            value={ email }
            data-test-id="common_login__input-email"
            onChange={ handleChange }
          />
          <div>
            <p>Password</p>
            <input
              type="text"
              name="password"
              value={ password }
              data-test-id="common_login__input-password"
              onChange={ handleChange }
            />
          </div>
          <div className={ styles.contentButtons }>
            <button
              type="submit"
              data-test-id="common_login__button-login"
              disabled={ !enableButton }
            >
              Login
            </button>
            <button
              type="submit"
              data-test-id="common_login__button-register"
            >
              Ainda não tenho conta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
