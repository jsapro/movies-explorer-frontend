import { Link } from 'react-router-dom';
import './Navigation.css';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const isMobileMode = window.innerWidth <= 768;
  console.log(isMobileMode);

  const isAuthorized = true;
  // const isAuthorized = false;

  const getGuestNav = () => {
    return (
      <nav className='nav-guest'>
        <ul className='nav-guest__list'>
          <li className='nav-guest__register'>
            <Link>Регистрация</Link>
          </li>
          <li className='nav-guest__login'>
            <Link>Войти</Link>
          </li>
        </ul>
      </nav>
    );
  };

  const getDesktopNav = () => {
    return (
      <nav className='nav-desktop'>
        <ul className='nav-desktop__list'>
          <li className='nav-desktop__item'>
            <NavLink
              to='/movies'
              className={({ isActive }) =>
                `nav-desktop__link ${isActive && 'nav-desktop__link_active'}`
              }
            >
              Фильмы
            </NavLink>
          </li>
          <li className='nav-desktop__item'>
            <NavLink
              to='/saved-movies'
              className={({ isActive }) =>
                `nav-desktop__link ${isActive && 'nav-desktop__link_active'}`
              }
            >
              Сохранённые фильмы
            </NavLink>
          </li>
          <li className='nav-desktop__item nav-desktop__item_type_special'>
            <NavLink to='/profile' className='nav-desktop__link nav-desktop__link_type_special'>
              Аккаунт
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  };

  const getBurgerNav = () => {
    return (
      <>
        <h1 className='nav-burger'>hello</h1>
        <div>Burger</div>
      </>
    );
  };

  const getActualNav = () => {
    if (!isAuthorized) return getGuestNav();
    if (isMobileMode) return getBurgerNav();
    return getDesktopNav();
  };

  return getActualNav();
};

export default Navigation;
