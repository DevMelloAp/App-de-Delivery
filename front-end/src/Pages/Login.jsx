import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import styles from '../styles/login.module.css';
import { requestLogin } from '../utils/request';
import { sendToLocalstorage } from '../utils/userLocalstorage';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [enableButton, setEnableButton] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [failedTryLogin, setFailedTryLogin] = useState(false);
  // const [ Token, setToken] = useState('');
  const [Role, setRole] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailValidator = regexEmail.test(email);
    const passMinLength = 6;
    const passValid = password.length >= passMinLength;
    const isValid = mailValidator && passValid;
    setEnableButton(isValid);
  }, [email, password]);

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const request = await requestLogin('/login', { email, password });
      const { name, token, role } = request;
      setRole(role);
      sendToLocalstorage({ name, email, token, role });
      // localStorage.setItem('token', token);
      // localStorage.setItem('role', role);

      setIsLogged(true);
    } catch (error) {
      setFailedTryLogin(true);
      setIsLogged(false);
    }
  };

  useEffect(() => {
    setFailedTryLogin(false);
  }, [email, password]);

  if (isLogged && Role === 'customer') return <Navigate to="/customer/products" />;

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
              onClick={ (e) => { handleLogin(e); } }
            >
              Login
            </button>
            { failedTryLogin ? (
              <p
                data-testid="common_login__element-invalid-email"
              >
                Usuário não encontrado
              </p>
            ) : null}
            <button
              type="submit"
              data-testid="common_login__button-register"
              onClick={ () => navigate('/register') }
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
