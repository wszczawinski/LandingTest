import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styles from './App.module.scss';
//components
import Navbar from './components/Navbar';
//screens
import Home from './screens/Home';

//routes
import * as ROUTES from './constants/routes';

function App() {
  return (
    <Router>
      <div className={styles.wrapper}>
        <Navbar />
        <main>
          <Switch>
            <Route exact path={ROUTES.HOME} component={Home} />
            <Route path={ROUTES.REGISTER} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
