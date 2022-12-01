import { useContext, Fragment } from 'react';

import CountriesContext from '../store/countries-context';
import ThemeContext from '../store/theme-context';
import CountriesList from '../components/countries/CountriesList';

const AllCountries = (props) => {
  const countriesCtx = useContext(CountriesContext);
  const themeCtx = useContext(ThemeContext);

  const { countries } = countriesCtx;

  const { isLoading, error } = props;

  const paragraphClassName = themeCtx.isDarkThemeActive
    ? 'centered-text dark-mode'
    : 'centered-text ';

  let content = <p className={paragraphClassName}>Found no countries.</p>;

  if (countries.length > 0) {
    content = <CountriesList countries={countries} />;
  }

  if (error) {
    content = <p className={paragraphClassName}>{error}</p>;
  }

  if (isLoading) {
    content = <p className={paragraphClassName}>Loading...</p>;
  }

  return <Fragment>{content}</Fragment>;
};

export default AllCountries;
