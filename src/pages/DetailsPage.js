import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import CountriesContext from '../store/countries-context';
import CountryDetail from '../components/countries/CountryDetail';

const DetailsPage = (props) => {
  const countriesCtx = useContext(CountriesContext);
  const { countryId } = useParams();

  const country = countriesCtx.countries.find(
    (country) => country.name === countryId
  );

  return <CountryDetail country={country} />;
};

export default DetailsPage;
