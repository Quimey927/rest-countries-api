import { Fragment, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import CountryDetail from '../components/countries/CountryDetail';
import useHttp from '../hooks/use-http';

const DetailsPage = (props) => {
  const [country, setCountry] = useState({});
  const { countryId } = useParams();

  const { isLoading, error, sendRequest: fetchCountry } = useHttp();

  useEffect(() => {
    const transformCountry = (data) => {
      const transformedCountry = {
        name: data[0].name.common,
        nativeName: data[0].name.nativeName,
        population: data[0].population,
        region: data[0].region,
        subregion: data[0].subregion,
        capital: data[0].capital[0],
        flag: data[0].flags.png,
        tld: data[0].tld,
        currencies: data[0].currencies,
        languages: data[0].languages,
        borders: data[0].borders,
      };

      setCountry(transformedCountry);
    };

    const url = `https://restcountries.com/v3.1/name/${countryId}`;

    fetchCountry({ url }, transformCountry);
  }, [fetchCountry, countryId]);

  let content = <p className="centered-text">Found no country.</p>;

  if (country) {
    content = <CountryDetail country={country} />;
  }

  if (error) {
    content = <p className="centered-text">{error}</p>;
  }

  if (isLoading) {
    content = <p className="centered-text">Loading...</p>;
  }

  return <Fragment>{content}</Fragment>;
};

export default DetailsPage;
