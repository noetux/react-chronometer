import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Segment} from 'semantic-ui-react';

export const NavBar = () => {
  const [activeItem, setActiveItem] = useState('Home');
  return (
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
  );
}