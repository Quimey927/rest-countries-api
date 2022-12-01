import { useEffect, useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import CountriesContext from './store/countries-context';
import Layout from './components/Layout/Layout';
import AllCountries from './pages/AllCountries';
import DetailsPage from './pages/DetailsPage';
import useHttp from './hooks/use-http';
import addDots from './utils/add-dots';

const App = () => {
  const countriesCtx = useContext(CountriesContext);

  const { isLoading, error, sendRequest: fetchCountries } = useHttp();

  const { onSetCountries, onSetFullNames } = countriesCtx;

  useEffect(() => {
    const transformCountries = (countries) => {
      const transformedCountries = countries.map((country) => {
        return {
          id: Math.random(),
          name: country.name.common,
          nativeName: country.name.nativeName,
          population: addDots(country.population),
          region: country.region,
          subregion: country.subregion,
          capital: country.capital,
          flag: country.flags.png,
          cca3: country.cca3,
          tld: country.tld,
          currencies: country.currencies,
          languages: country.languages,
          borders: country.borders,
        };
      });

      const countriesFullNames = {};

      for (let country of countries) {
        countriesFullNames[country.cca3] = country.name.common;
      }

      onSetCountries(transformedCountries);
      onSetFullNames(countriesFullNames);
    };

    fetchCountries(
      { url: 'https://restcountries.com/v3.1/all' },
      transformCountries
    );
  }, [fetchCountries, onSetCountries, onSetFullNames]);

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/countries" />
        </Route>
        <Route path="/countries" exact>
          <AllCountries isLoading={isLoading} error={error} />
        </Route>
        <Route path="/countries/:countryId">
          <DetailsPage />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
