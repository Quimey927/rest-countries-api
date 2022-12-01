import { useContext, Fragment } from 'react';

import CountriesContext from '../store/countries-context';
import CountriesList from '../components/countries/CountriesList';

const AllCountries = (props) => {
  const countriesCtx = useContext(CountriesContext);

  const { countries } = countriesCtx;

  const { isLoading, error } = props;

  let content = <p className="centered-text">Found no countries.</p>;

  if (countries.length > 0) {
    content = <CountriesList countries={countries} />;
  }

  if (error) {
    content = <p className="centered-text">{error}</p>;
  }

  if (isLoading) {
    content = <p className="centered-text">Loading...</p>;
  }

  return <Fragment>{content}</Fragment>;
};

export default AllCountries;
