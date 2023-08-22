import './Register.css';
import Logo from '../Logo/Logo';
import AuthInput from '../AuthInput/AuthInput';
import AuthSubmit from '../AuthSubmit/AuthSubmit';

const Register = () => {
  return (
    <main className='register'>
      <div className='register__container'>
        <Logo />
        <h1 className='register__title'>Добро пожаловать!</h1>
        <form className='register__form' autoComplete='on'>
          <AuthInput
            inputDescription='Имя'
            name='name'
            minLength={3}
            type='text'
          />
          <AuthInput
            inputDescription='E-mail'
            name='email'
            minLength={3}
            type='email'
          />
          <AuthInput
            inputDescription='Пароль'
            name='password'
            minLength={5}
            type='password'
          />

          <AuthSubmit type='register'></AuthSubmit>
        </form>
      </div>
    </main>
  );
};

export default Register;
