import PropTypes from 'prop-types';
// імпортуємо стилі з сss
// import css from './PageTitle.module.css';
//тепер стилі по новому і фаіл з ним повязаним з верху непотрібен
import {Title} from './PageTitle.styled';

export const PageTitle = ({ text }) => {
    // в реакті класи пишуться тілки так className
    // return <h1 className={css.title}>{text}</h1>
   // тепер нова запис
    return <Title>{text}</Title>
}

PageTitle.propTypes = {
  text: PropTypes.string.isRequired,
};