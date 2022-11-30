import { useState, useEffect, Fragment } from 'react';

import CountriesList from '../components/countries/CountriesList';
import useHttp from '../hooks/use-http';
import addDots from '../utils/add-dots';

const AllCountries = () => {
  const [countries, setCountries] = useState([]);

  const { isLoading, error, sendRequest: fetchCountries } = useHttp();

  useEffect(() => {
    const transformCountries = (countries) => {
      const transformedCountries = countries.map((country) => {
        return {
          id: Math.random(),
          name: country.name.common,
          population: addDots(country.population),
          region: country.region,
          flag: country.flags.png,
          subregion: country.subregion,
          capital: country.capital,
        };
      });

      setCountries(transformedCountries);
    };

    fetchCountries(
      { url: 'https://restcountries.com/v3.1/all' },
      transformCountries
    );
  }, [fetchCountries]);

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
