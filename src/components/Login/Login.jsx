import { useState } from 'react';
import './Login.css';
import AuthInput from '../AuthInput/AuthInput';
import AuthSubmit from '../AuthSubmit/AuthSubmit';
import Logo from '../Logo/Logo';
import useFormWithValidation from '../../hooks/useFormWithValidation';

const Login = ({ handleUserLogin }) => {
  const [serverResponseError, setServerResponseError] = useState('');
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    handleUserLogin(values.email, values.password).catch((err) => {
      setServerResponseError(err.message);
    });
  };

  const handleChangeInput = (e) => {
    setServerResponseError('');
    handleChange(e);
  };

  return (
    <main className='login'>
      <div className='login__container'>
        <Logo />
        <h1 className='login__title'>Рады видеть!</h1>
        <form
          name='login'
          className='login__form'
          autoComplete='on'
          onSubmit={handleLoginSubmit}
        >
          <AuthInput
            inputDescription='E-mail'
            name='email'
            type='email'
            handleChange={handleChangeInput}
          />
          <AuthInput
            inputDescription='Пароль'
            name='password'
            minLength={5}
            type='password'
            handleChange={handleChangeInput}
          />

          <AuthSubmit type='login' serverResponseError={serverResponseError} />
        </form>
      </div>
    </main>
  );
};

export default Login;
