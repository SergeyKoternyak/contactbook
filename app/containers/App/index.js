// Global
import React from 'react';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';

// Styles
import style from './app.scss';

// Components
import Contacts from '../Contacts';
import CreateContact from '../CreateContact';
import ViewContact from '../ViewContact';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

// import Try from '../Try';

// Constants
import {
  PATH_CATEGORY,
  PATH_CONTACT,
  PATH_CREATE,
  PATH_MAIN,
  PATH_PROFILE
} from '../../constants/pathNames';

const App = () => (
  <BrowserRouter>
    <div className={style.container}>
      <Sidebar customClass={style.sidebar} />

      <Header customClass={style.header} />

      <main className={style.contentBox}>
        <Switch>
          <Route
            path={`${PATH_CATEGORY}:category`}
            render={props => (
              <Contacts {...props} />
            )}
          />

          <Route
            path={PATH_CREATE}
            component={CreateContact}
          />

          <Route
            path={`${PATH_CONTACT}:id`}
            render={props => (
              <ViewContact {...props} />
            )}
          />

          <Route
            path={PATH_PROFILE}
            component={ViewContact}
          />

          <Route
            exact
            path={PATH_MAIN}
            render={() => (
              <Redirect to={PATH_CREATE} />
            )}
          />
          {/* TODO: 404 */}
        </Switch>
      </main>
    </div>

  </BrowserRouter>
);

export default App;
