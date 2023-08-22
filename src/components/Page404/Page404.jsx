import { Link } from 'react-router-dom';
import './Page404.css';

const Page404 = () => {
  return (
    <main className='page404'>
      <h1 className='page404__title'>404</h1>
      <p className='page404__description'>Страница не найдена</p>
      <Link className='page404__link' to='/'>Назад</Link>
    </main>
  );
};

export default Page404;
