import { Link } from 'react-router-dom';
import './NavTab.css';

const NavTab = () => {
  return (
    <nav className='nav'>
      <ul className='nav__list'>
        <li className='nav__item'>
          <Link className='nav__link' to='#about-project'>
            О проекте
          </Link>
        </li>
        <li className='nav__item'>
          <Link className='nav__link' to='#techs'>
            Технологии
          </Link>
        </li>
        <li className='nav__item'>
          <Link className='nav__link' to='about-me'>
            Студент
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavTab;
