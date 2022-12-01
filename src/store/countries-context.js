import React, { useState } from 'react';

const CountriesContext = React.createContext({
  countries: [],
  fullNames: {},
  onSetCountries: (data) => {},
  onSetFullNames: (data) => {},
});

export const CountriesContextProvider = (props) => {
  const [countries, setCountries] = useState([]);
  const [fullNames, setFullNames] = useState({});

  return (
    <CountriesContext.Provider
      value={{
        countries,
        fullNames,
        onSetCountries: setCountries,
        onSetFullNames: setFullNames,
      }}
    >
      {props.children}
    </CountriesContext.Provider>
  );
};

export default CountriesContext;
