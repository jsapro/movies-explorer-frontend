import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className='navigation'>
      <ul className='navigation__list'>
        <li className='navigation__register'>Регистрация</li>
        <li className='navigation__login'>Войти</li>
      </ul>
    </nav>
  );
};

export default Navigation;
