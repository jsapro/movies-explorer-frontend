import { Link } from 'react-router-dom';
import './AboutMe.css';
import photo from '../../../images/foto.webp'

const AboutMe = () => {
  return (
    <section className='about-me'>
      <h2 className='about-me__title'>Студент</h2>
      <img
        className='about-me__photo'
        src={photo}
        alt='фото студента курса'
      />
      <article className='about-me__article'>
        <h3 className='about-me__subtitle'>Алексей</h3>
        <p className='about-me__profession'>Фронтенд-разработчик, 41 год</p>
        <p className='about-me__description'>
          Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня
          есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
          Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
          После того, как прошёл курс по веб-разработке, начал заниматься
          фриланс-заказами и ушёл с постоянной работы.
        </p>
        <Link
          className='about-me__link'
          to='https://github.com/jsapro'
          target='_blanc'
        >
          Github
        </Link>
      </article>
    </section>
  );
};

export default AboutMe;
