import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styles from './App.module.scss';
//components
import Navbar from './components/Navbar';

//routes
import * as ROUTES from './constants/routes';

function App() {
  return (
    <Router>
      <div className={styles.wrapper}>
        <Navbar />

        <Switch>
          <Route exact path={ROUTES.HOME} />
          <Route path={ROUTES.REGISTER} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
