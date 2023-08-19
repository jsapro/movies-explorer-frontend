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
        <form className='register__form'>
          <AuthInput></AuthInput>
          <AuthInput></AuthInput>
          <AuthInput></AuthInput>

          
          <AuthSubmit type='register'></AuthSubmit>
        </form>
      </div>
    </main>
  );
};

export default Register;
