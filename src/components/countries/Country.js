import { useContext } from 'react';
import { Link } from 'react-router-dom';

import ThemeContext from '../../store/theme-context';
import Card from '../UI/Card';
import classes from './Country.module.css';

const Country = (props) => {
  const themeCtx = useContext(ThemeContext);

  const countryClasses = `${classes.country} ${
    themeCtx.isDarkThemeActive
      ? `dark-element ${classes['country-shadow']}`
      : 'shadow'
  }`;

  return (
    <Card className={countryClasses}>
      <li className={classes['country-item']}>
        <Link className={classes.link} to={`/countries/${props.name}`}>
          <img
            className={classes.img}
            src={props.flag}
            alt={props.name + "'s flag"}
          />
          <div
            className={
              themeCtx.isDarkThemeActive ? 'dark-element' : 'light-mode'
            }
          >
            <h3>{props.name}</h3>
            <p>
              Population: <span>{props.population}</span>
            </p>
            <p>
              Region: <span>{props.region}</span>
            </p>
            <p>
              Capital: <span>{props.capital}</span>
            </p>
          </div>
        </Link>
      </li>
    </Card>
  );
};

export default Country;
