import React from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import styles from './App.module.scss';

//components
import Navbar from './components/Navbar';
import ModalWindow from './components/modal/ModalWindow';
import Register from './components/modal/Register';
import Login from './components/modal/Login';

//screens
import Home from './screens/Home';

//routes
import * as ROUTES from './constants/routes';

export default function App() {
  return (
    <Router>
      <RouteSwitch />
    </Router>
  );
}

function RouteSwitch() {
  let location = useLocation();
  let background = location.state && location.state.background;

  return (
    <div className={styles.wrapper}>
      <Navbar />
      <main>
        <Switch location={background || location}>
          <Route exact path={ROUTES.HOME} component={Home} />
          <Route path={ROUTES.REGISTER} children={<ModalWindow Form={Register} />} />
          <Route path={ROUTES.LOGIN} children={<ModalWindow Form={Login} />} />
        </Switch>
        {background && (
          <Route path={ROUTES.REGISTER} children={<ModalWindow Form={Register} />} />
        )}
        {background && (
          <Route path={ROUTES.LOGIN} children={<ModalWindow Form={Login} />} />
        )}
      </main>
    </div>
  );
}
