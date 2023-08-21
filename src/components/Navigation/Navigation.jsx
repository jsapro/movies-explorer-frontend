import { Link } from 'react-router-dom';
import './Navigation.css';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const isMobileMode = window.innerWidth <= 768;
  console.log(isMobileMode);

  // const isAuthorized = true;
  const isAuthorized = false;

  const getGuestNav = () => {
    return (
      <nav className='nav-guest'>
        <ul className='nav-guest__list'>
          <li>
            <Link
              to='/signup'
              className='nav-guest__link nav-guest__link_type_register'
            >
              Регистрация
            </Link>
          </li>
          <li>
            <Link
              to='/signin'
              className='nav-guest__link nav-guest__link_type_login'
            >
              Войти
            </Link>
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
            <NavLink
              to='/profile'
              className='nav-desktop__link nav-desktop__link_type_special'
            >
              Аккаунт
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  };

  const getBurgerNav = () => {
    return (
      <section className='nav-burger nav-burger_opened'>
        <div className='nav-burger__container'>
          <button className='nav-burger__close-btn' />
          <nav>
            <ul className='nav-burger__list'>
              <li className='nav-burger__item'>
                <NavLink
                  to='/'
                  className={({ isActive }) =>
                    `nav-burger__link ${
                      isActive && 'nav-burger__link_type_active'
                    }`
                  }
                >
                  Главная
                </NavLink>
              </li>
              <li className='nav-burger__item'>
                <NavLink
                  to='/movies'
                  className={({ isActive }) =>
                    `nav-burger__link ${
                      isActive && 'nav-burger__link_type_active'
                    }`
                  }
                >
                  Фильмы
                </NavLink>
              </li>
              <li className='nav-burger__item'>
                <NavLink
                  to='/saved-movies'
                  className={({ isActive }) =>
                    `nav-burger__link ${
                      isActive && 'nav-burger__link_type_active'
                    }`
                  }
                >
                  Сохранённые фильмы
                </NavLink>
              </li>
              <li className='nav-burger__item'>
                <NavLink
                  to='/profile'
                  className='nav-burger__link nav-burger__link_type_special'
                >
                  Аккаунт
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </section>
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
