import React from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import styles from './App.module.scss';

//components
import Navbar from './components/Navbar';
import ModalWindow from './components/ModalWindow';
import Register from './components/Register';
import Login from './components/Login';

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
          <Route path={ROUTES.REGISTER} component={ModalWindow} />
          <Route path={ROUTES.LOGIN} component={ModalWindow} />
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
