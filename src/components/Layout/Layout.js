import { Fragment, useContext } from 'react';

import ThemeContext from '../../store/theme-context';
import Header from './Header';

const Layout = (props) => {
  const themeCtx = useContext(ThemeContext);

  return (
    <Fragment>
      <Header />
      <main className={themeCtx.isDarkThemeActive ? 'dark-element' : ''}>
        {props.children}
      </main>
    </Fragment>
  );
};

export default Layout;
