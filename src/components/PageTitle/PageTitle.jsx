import PropTypes from 'prop-types';
// імпортуємо стилі з сss
import css from './PageTitle.module.css';

export const PageTitle = ({ text }) => {
    // в реакті класи пишуться тілки так className
    return <h1 className={css.title}>{text}</h1>
}

PageTitle.propTypes = {
  text: PropTypes.string.isRequired,
};