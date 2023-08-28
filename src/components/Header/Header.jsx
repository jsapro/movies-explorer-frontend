import './Header.css';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

const Header = ({isLoggedIn}) => {
  return (
    <header className='header'>
      <div className='header__container'>
        <Logo />
        <Navigation isLoggedIn={isLoggedIn}/>
      </div>
    </header>
  );
};

export default Header;
