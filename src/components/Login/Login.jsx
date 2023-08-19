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
        <form name='login' className='login__form' autoComplete='on'>
          <AuthInput
            inputDescription='E-mail'
            name='email'
            type='email'
          />
          <AuthInput
            inputDescription='Пароль'
            name='password'
            minLength={5}
            type='password'
          />

          <AuthSubmit type='login' />
        </form>
      </div>
    </main>
  );
};

export default Login;
