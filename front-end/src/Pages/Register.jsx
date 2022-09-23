import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from '../styles/login.module.css';
import { register } from '../utils/request';
import { sendToLocalstorage } from '../utils/userLocalstorage';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [enableButton, setEnableButton] = useState(true);
  const [failedTryRegister, setFailedTryRegister] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    // const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\*/i;
    const regexEmail = /\S+@\S+\.\S+/;
    const mailValidator = regexEmail.test(email);
    const passMinLength = 6;
    const nameMinLength = 12;
    const nameValid = name.length > nameMinLength;
    const passValid = password.length >= passMinLength;
    const isValid = mailValidator && passValid && nameValid;
    setEnableButton(isValid);
  }, [email, password, name]);

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      const request = await register('/register', { email, name, password });
      const { token, role } = request;
      sendToLocalstorage({ name, email, token, role });
      if (request.role === 'customer') {
        return navigate('/customer/products');
      }
    } catch (error) {
      setFailedTryRegister(true);
      console.error(error);
    }
  };
  useEffect(() => {
    setFailedTryRegister(false);
  }, [email, name, password]);

  return (
    <div className={ styles.registerPage }>
      <div className={ styles.content }>
        <div className={ styles['content-two'] }>
          <p>Nome</p>
          <input
            type="name"
            name="name"
            value={ name }
            data-testid="common_register__input-name"
            onChange={ (e) => { setName(e.target.value); } }

          />
          <div>
            <p>Email</p>
            <input
              type="text"
              name="email"
              value={ email }
              data-testid="common_register__input-email"
              onChange={ (e) => { setEmail(e.target.value); } }

            />
            <p>Senha</p>
            <input
              type="text"
              name="senha"
              value={ password }
              data-testid="common_register__input-password"
              onChange={ (e) => { setPassword(e.target.value); } }

            />
          </div>
          <div className={ styles.contentButtons }>
            <button
              type="submit"
              data-testid="common_register__button-register"
              disabled={ !enableButton }
              onClick={ handleRegister }

            >
              Cadastre
            </button>
            { failedTryRegister ? (
              <p
                data-testid="common_register__element-invalid_register"
              >
                Usuário ja existente
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Register;
