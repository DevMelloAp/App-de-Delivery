import React, { useEffect, useState } from 'react';
import { registerByAdm } from '../utils/request';
import { getToLocalstorage } from '../utils/userLocalstorage';

function RegisterUserByAdm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('customer');
  const [enableButton, setEnableButton] = useState(true);
  const [failedTryRegister, setFailedTryRegister] = useState(false);

  useEffect(() => {
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
    const { token } = getToLocalstorage();
    const newUser = { email, name, password, role };
    try {
      const user = await registerByAdm(newUser, token);
      setFailedTryRegister(false);
      console.log(user);
    } catch (error) {
      setFailedTryRegister(true);
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Cadastrar novo usuário</h1>
      <div>
        <label htmlFor="name">
          Nome
          <input
            type="text"
            id="name"
            value={ name }
            onChange={ (e) => setName(e.target.value) }
            placeholder="Nome e sobrenome"
            data-testid="admin_manage__input-name"
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="text"
            id="email"
            value={ email }
            onChange={ (e) => setEmail(e.target.value) }
            placeholder="seu email@site.com.br"
            data-testid="admin_manage__input-email"
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            type="password"
            id="password"
            value={ password }
            onChange={ (e) => setPassword(e.target.value) }
            placeholder="************"
            data-testid="admin_manage__input-password"
          />
        </label>
        <label htmlFor="role">
          Tipo
          <select
            type="password"
            id="role"
            value={ role }
            onChange={ (e) => setRole(e.target.value) }
            data-testid="admin_manage__select-role"
          >
            <option value="customer">Consumidor</option>
            <option value="seller">Vendedor</option>
            <option value="administrator">Administrador</option>
          </select>
        </label>
        <button
          type="button"
          disabled={ !enableButton }
          onClick={ handleRegister }
          data-testid="admin_manage__button-register"
        >
          CADASTRAR

        </button>
      </div>
      { failedTryRegister ? (
        <p
          data-testid="admin_manage__element-invalid-register"
        >
          Usuário ja existente
        </p>
      ) : null}
    </div>
  );
}

export default RegisterUserByAdm;
