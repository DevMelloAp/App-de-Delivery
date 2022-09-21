import React, { useEffect, useState } from 'react';
import styles from '../styles/login.module.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [enableButton, setEnableButton] = useState(false);

  useEffect(() => {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailValidator = regexEmail.test(email);
    const passMinLength = 6;
    const passValid = password.length >= passMinLength;
    const isValid = mailValidator && passValid;
    setEnableButton(isValid);
  }, [email, password]);

  return (
    <div className={ styles.loginPage }>
      <div className={ styles.content }>
        <div className={ styles['content-two'] }>
          <p>Login</p>
          <input
            type="email"
            name="email"
            value={ email }
            data-testid="common_login__input-email"
            onChange={ (e) => { setEmail(e.target.value); } }
          />
          <div>
            <p>Password</p>
            <input
              type="text"
              name="password"
              value={ password }
              data-testid="common_login__input-password"
              onChange={ (e) => { setPassword(e.target.value); } }
            />
          </div>
          <div className={ styles.contentButtons }>
            <button
              type="submit"
              data-testid="common_login__button-login"
              disabled={ !enableButton }
            >
              Login
            </button>
            <button
              type="submit"
              data-testid="common_login__button-register"
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
