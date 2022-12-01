import { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import ThemeContext from '../../store/theme-context';
import Country from './Country';
import classes from './CountriesList.module.css';

const CountriesList = (props) => {
  const themeCtx = useContext(ThemeContext);

  const [query, setQuery] = useState('');
  const [region, setRegion] = useState('');

  const { countries } = props;

  const filteredCountries = countries
    .filter((country) =>
      country.name.toLowerCase().includes(query.trim().toLowerCase())
    )
    .filter((country) => region === '' || country.region === region);

  const sectionClasses = `${classes.section} ${
    themeCtx.isDarkThemeActive ? 'dark-mode' : 'light-mode'
  }`;

  const inputClasses = `${classes.input} ${
    themeCtx.isDarkThemeActive ? 'dark-element' : 'light-element'
  }`;

  const noMatchClasses = `${classes.noMatch} ${
    themeCtx.isDarkThemeActive ? 'dark-mode' : ''
  }`;

  let filters = (
    <div className={classes.filters}>
      <div className={inputClasses}>
        <FontAwesomeIcon icon={faSearch} className={classes.icon} />
        <input
          className={
            themeCtx.isDarkThemeActive ? 'dark-element' : 'light-element'
          }
          type="search"
          placeholder="Search for a country..."
          onChange={(evt) => setQuery(evt.target.value)}
          value={query}
        />
      </div>
      <select
        className={inputClasses}
        defaultValue={''}
        onChange={(evt) => setRegion(evt.target.value)}
      >
        <option value="" disabled hidden>
          Filter By Region
        </option>
        <option value="">All regions</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );

  let countriesList = (
    <p className={noMatchClasses}>No country matches the queries.</p>
  );

  if (filteredCountries.length > 0) {
    countriesList = (
      <ul className={classes['countries-list']}>
        {filteredCountries.map((country) => (
          <Country
            key={country.id}
            name={country.name}
            population={country.population}
            region={country.region}
            capital={country.capital}
            flag={country.flag}
          />
        ))}
      </ul>
    );
  }

  return (
    <section className={sectionClasses}>
      {filters}
      {countriesList}
    </section>
  );
};

export default CountriesList;
