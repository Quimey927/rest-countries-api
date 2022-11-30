import { Route, Switch, Redirect } from 'react-router-dom';

import DetailsPage from './pages/DetailsPage';
import Layout from './components/Layout/Layout';
import AllCountries from './pages/AllCountries';

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/countries" />
        </Route>
        <Route path="/countries" exact>
          <AllCountries />
        </Route>
        <Route path="/countries/:countryId">
          <DetailsPage />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
