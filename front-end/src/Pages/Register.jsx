import React, { useEffect, useState } from 'react';

import styles from '../styles/login.module.css';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nome, setNome] = useState('');
  const [enableButton, setEnableButton] = useState(true);

  useEffect(() => {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailValidator = regexEmail.test(email);
    const passMinLength = 6;
    const nameMaxLength = 12;
    const nameValid = nome.length <= nameMaxLength;
    const passValid = password.length >= passMinLength;
    const isValid = mailValidator && passValid && nameValid;
    setEnableButton(isValid);
  }, [email, password, nome]);

  return (
    <div className={ styles.registerPage }>
      <div className={ styles.content }>
        <div className={ styles['content-two'] }>
          <p>Nome</p>
          <input
            type="nome"
            name="nome"
            value={ nome }
            data-testid="common_register__input-name"
            onChange={ (e) => { setNome(e.target.value); } }

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

            >
              Cadastre
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Register;
