import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import { Menu, Segment} from 'semantic-ui-react';
import { HomePage,
  ChronometerPage,
  TimerPage,
  CyclesPage,
  IntervalsPage,
} from './pages'
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'

function App() {
  const [activeItem, setActiveItem] = useState('Home');

  return (
    <div>
      <Router>
        <Segment inverted>
          <Menu inverted pointing secondary>
            <Menu.Item
              name="Home"
              active={activeItem === 'Home'}
              onClick={(e, { name }) => setActiveItem(name)}
              as={Link}
              to="/"
            >Home</Menu.Item>
            <Menu.Item
              name="Chronometer"
              active={activeItem === 'Chronometer'}
              onClick={(e, { name }) => setActiveItem(name)}
              as={Link}
              to="/chronometer"
            >Chronometer</Menu.Item>
            <Menu.Item
              name="Timer"
              active={activeItem === 'Timer'}
              onClick={(e, { name }) => setActiveItem(name)}
              as={Link}
              to="/timer"
            >Timer</Menu.Item>
            <Menu.Item
              name="Cycles"
              active={activeItem === 'Cycles'}
              onClick={(e, { name }) => setActiveItem(name)}
              as={Link}
              to="/cycles"
            >Cycles</Menu.Item>
            <Menu.Item
              name="Intervals"
              active={activeItem === 'Intervals'}
              onClick={(e, { name }) => setActiveItem(name)}
              as={Link}
              to="/intervals"
            >Intervals</Menu.Item>
          </Menu>
        </Segment>
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

    </div>
  );
}

export default App;
