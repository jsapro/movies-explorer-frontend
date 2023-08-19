import './Login.css';
import AuthInput from '../AuthInput/AuthInput';
import AuthSubmit from '../AuthSubmit/AuthSubmit';
import Logo from '../Logo/Logo';

const Login = () => {
  return (
    <main className='login'>
      <div className='login__container'>
        <Logo />
        <h1 className='login__title'>Рады видеть!</h1>
        <form className='login__form'>
          <AuthInput></AuthInput>
          <AuthInput></AuthInput>

          <AuthSubmit type='login'></AuthSubmit>
        </form>
      </div>
    </main>
  );
};

export default Login;
