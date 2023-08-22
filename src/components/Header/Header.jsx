import './Header.css';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

const Header = () => {
  return (
    <header className='header'>
      <div className='header__container'>
        <Logo />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
