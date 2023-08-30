import { useState } from 'react';
import './Register.css';
import Logo from '../Logo/Logo';
import AuthInput from '../AuthInput/AuthInput';
import AuthSubmit from '../AuthSubmit/AuthSubmit';
import useFormWithValidation from '../../hooks/useFormWithValidation';

const Register = ({ onRegister }) => {
  const [serverResponseError, setServerResponseError] = useState('');
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    onRegister(values.name, values.email, values.password).catch((err) => {
      setServerResponseError(err.message);
    });
  };

  const handleChangeInput = (e) => {
    setServerResponseError('');
    handleChange(e);
  };

  return (
    <main className='register'>
      <div className='register__container'>
        <Logo />
        <h1 className='register__title'>Добро пожаловать!</h1>
        <form
          className='register__form'
          autoComplete='on'
          onSubmit={handleRegisterSubmit}
        >
          <AuthInput
            inputDescription='Имя'
            name='name'
            minLength='2'
            type='text'
            handleChange={handleChangeInput}
            inputError={errors.name}
            />
          <AuthInput
            inputDescription='E-mail'
            name='email'
            type='email'
            handleChange={handleChangeInput}
            inputError={errors.email}
            />
          <AuthInput
            inputDescription='Пароль'
            name='password'
            minLength='8'
            type='password'
            handleChange={handleChangeInput}
            inputError={errors.password}
            />

          <AuthSubmit
            type='register'
            onRegister={onRegister}
            serverResponseError={serverResponseError}
          ></AuthSubmit>
        </form>
      </div>
    </main>
  );
};

export default Register;
