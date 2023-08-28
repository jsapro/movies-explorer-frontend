import './Login.css';
import AuthInput from '../AuthInput/AuthInput';
import AuthSubmit from '../AuthSubmit/AuthSubmit';
import Logo from '../Logo/Logo';
import useFormWithValidation from '../../hooks/useFormWithValidation';

const Login = ({ handleUserLogin }) => {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    handleUserLogin(values.email, values.password);
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
          <AuthInput inputDescription='E-mail' name='email' type='email' handleChange={handleChange}/>
          <AuthInput
            inputDescription='Пароль'
            name='password'
            minLength={5}
            type='password'
            handleChange={handleChange}
          />

          <AuthSubmit type='login' />
        </form>
      </div>
    </main>
  );
};

export default Login;
