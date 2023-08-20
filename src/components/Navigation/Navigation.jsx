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
            <NavLink className='nav-desktop__link'>Фильмы</NavLink>
          </li>
          <li className='nav-desktop__item'>
            <NavLink className='nav-desktop__link'>Сохранённые фильмы</NavLink>
          </li>
          <li className='nav-desktop__item'>
            <NavLink className='nav-desktop__link'>Аккаунт</NavLink>
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
  // <>
  //   {!isAuthorized ? (
  //     getNotAuthorizedNav()
  //   ) : (
  //     <>{isMobileMode ? getBurgerNav() : getNotBurgerNav()}</>
  //   )}
  // </>
};

export default Navigation;
