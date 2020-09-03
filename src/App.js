import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import { NavBar } from './NavBar';
import { HomePage,
  ChronometerPage,
  TimerPage,
  CyclesPage,
  IntervalsPage,
} from './pages'
import './App.css';
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        <Route path='/chronometer'>
          <ChronometerPage />
        </Route>
        <Route path='/timer'>
          <TimerPage />
        </Route>
        <Route path='/cycles'>
          <CyclesPage />
        </Route>
        <Route path='/intervals'>
          <IntervalsPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;