import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

import ThemeContext from '../../store/theme-context';
import classes from './Header.module.css';

const Header = () => {
  const themeCtx = useContext(ThemeContext);

  const headerClasses = `${classes.header} ${
    themeCtx.isDarkThemeActive ? 'dark-element shadow' : 'shadow'
  }`;

  return (
    <header className={headerClasses}>
      <h3>Where in the world?</h3>
      <button onClick={themeCtx.onToggleTheme}>
        <FontAwesomeIcon className={classes.icon} icon={faMoon} />
        Dark mode
      </button>
    </header>
  );
};

export default Header;
