import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import classes from './CountryDetail.module.css';
import Button from '../UI/Button';
import ThemeContext from '../../store/theme-context';
import addDots from '../../utils/add-dots';

const CountryDetail = (props) => {
  const themeCtx = useContext(ThemeContext);

  let currencies = [];
  let languages = [];
  let nativeName = '';

  for (let currency in props.country.currencies) {
    currencies.push(props.country.currencies[currency].name);
  }

  for (let language in props.country.languages) {
    languages.push(props.country.languages[language]);
  }

  for (let name in props.country.nativeName) {
    nativeName = props.country.nativeName[name].common;
  }

  const sectionClasses = `${classes.section} ${
    themeCtx.isDarkThemeActive ? 'dark-mode' : 'light-mode'
  }`;

  const countryDetailsClasses = `${classes['country-details']} ${
    themeCtx.isDarkThemeActive ? 'dark-mode ' : 'light-mode'
  }`;

  const buttonClasses = `${classes.button} ${
    themeCtx.isDarkThemeActive ? 'dark-element' : 'light-element'
  }`;

  return (
    <section className={sectionClasses}>
      <div className={classes.container}>
        <div className={classes.actions}>
          <Link to="/countries">
            <Button className={buttonClasses}>
              <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon> Back
            </Button>
          </Link>
        </div>
        <div className={countryDetailsClasses}>
          <div className={classes['flex-items']}>
            <img
              src={props.country.flag}
              alt={`${props.country.name}'s Flag`}
            />
          </div>
          <div className={classes['flex-items']}>
            <h3>{props.country.name}</h3>
            <div className={classes.info}>
              <div className={classes.div}>
                <p>
                  Native Name: <span>{nativeName}</span>
                </p>
                <p>
                  Population: <span>{addDots(props.country.population)}</span>
                </p>
                <p>
                  Region: <span>{props.country.region}</span>
                </p>
                <p>
                  Sub Region: <span>{props.country.subregion}</span>
                </p>
                <p>
                  Capital: <span>{props.country.capital}</span>
                </p>
              </div>
              <div className={classes.div}>
                <p>
                  Top Level Domain: <span>{props.country.tld}</span>
                </p>
                <p>
                  Currencies: <span>{currencies.join(', ')}</span>
                </p>
                <p>
                  Languages: <span>{languages.join(', ')}</span>
                </p>
              </div>
            </div>
            <div className={classes['border-countries']}>
              <h4 className={classes.border}>Border Countries: </h4>
              {props.country.borders &&
                props.country.borders.map((country) => {
                  return (
                    <Button className={buttonClasses} key={Math.random()}>
                      {country}
                    </Button>
                  );
                })}
              {!props.country.borders && <span> No borders.</span>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryDetail;
