import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import styles from '../styles/login.module.css';
import { requestLogin } from '../utils/request';
import { sendToLocalstorage, getToLocalstorage } from '../utils/userLocalstorage';
import { setUserEmail } from '../redux/actions/user';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [enableButton, setEnableButton] = useState(false);
  const [failedTryLogin, setFailedTryLogin] = useState(false);

  const navigate = useNavigate();
  const dispacth = useDispatch();

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
      console.log(request);
      const { name, token, role, id } = request;
      sendToLocalstorage({ id, name, email, token, role });
      dispacth(setUserEmail(email));
    } catch (error) {
      setFailedTryLogin(true);
    }
  };

  useEffect(() => {
    setFailedTryLogin(false);
  }, [email, password]);

  const currentRole = getToLocalstorage();
  if (currentRole && currentRole.role) {
    if (currentRole?.role === 'customer') return <Navigate to="/customer/products" />;
    if (currentRole?.role === 'seller') return <Navigate to="/seller/orders" />;
    if (currentRole?.role === 'admin') return <Navigate to="/admin/manage" />;
  }

  return (
    <div className={ styles.loginPage }>
      <div className={ styles.content }>
        <div>
          <p>Login</p>
          <input
            id="outlined-basic"
            variant="outlined"
            type="email"
            name="email"
            value={ email }
            data-testid="common_login__input-email"
            onChange={ (e) => { setEmail(e.target.value); } }
          />
          <div>
            <p>Password</p>
            <input
              id="outlined-basic"
              variant="outlined"
              type="text"
              name="password"
              value={ password }
              data-testid="common_login__input-password"
              onChange={ (e) => { setPassword(e.target.value); } }
            />
          </div>
          <div className={ styles.contentButtons }>
            <Button
              variant="contained"
              color="success"
              size="large"
              type="submit"
              data-testid="common_login__button-login"
              disabled={ !enableButton }
              onClick={ (e) => { handleLogin(e); } }
            >
              Login
            </Button>
            { failedTryLogin ? (
              <p
                data-testid="common_login__element-invalid-email"
              >
                Usuário não encontrado
              </p>
            ) : null}
            <Button
              variant="outlined"
              color="success"
              size="large"
              type="submit"
              data-testid="common_login__button-register"
              onClick={ () => navigate('/register') }
            >
              Ainda não tenho conta
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
