import './Register.css';
import Logo from '../Logo/Logo';
import AuthInput from '../AuthInput/AuthInput';
import AuthSubmit from '../AuthSubmit/AuthSubmit';
import useFormWithValidation from '../../hooks/useFormWithValidation';

const Register = ({ onRegister }) => {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    onRegister(values.name, values.email, values.password)
  }

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
            minLength={3}
            type='text'
            handleChange={handleChange}
            />
          <AuthInput
            inputDescription='E-mail'
            name='email'
            minLength={3}
            type='email'
            handleChange={handleChange}
            />
          <AuthInput
            inputDescription='Пароль'
            name='password'
            minLength={5}
            type='password'
            handleChange={handleChange}
          />

          <AuthSubmit type='register' onRegister={onRegister}></AuthSubmit>
        </form>
      </div>
    </main>
  );
};

export default Register;
