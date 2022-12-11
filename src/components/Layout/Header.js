import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

import ThemeContext from '../../store/theme-context';
import classes from './Header.module.css';

const Header = () => {
  const themeCtx = useContext(ThemeContext);

  const headerClasses = `${classes.header} ${
    themeCtx.isDarkThemeActive ? 'dark-element shadow' : 'shadow'
  }`;

  const icon = themeCtx.isDarkThemeActive ? (
    <FontAwesomeIcon className={classes.icon} icon={faSun} />
  ) : (
    <FontAwesomeIcon className={classes.icon} icon={faMoon} />
  );

  return (
    <header className={headerClasses}>
      <h3>Where in the world?</h3>
      <button onClick={themeCtx.onToggleTheme}>
        {icon}
        {themeCtx.isDarkThemeActive ? 'Light mode' : 'Dark mode'}
      </button>
    </header>
  );
};

export default Header;
