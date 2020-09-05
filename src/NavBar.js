import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Grid, Icon, Menu } from "semantic-ui-react";

export const NavBar = () => {
  const [dropdownMenuStyle, setDropdownMenuStyle] = useState({
    display: "none"
  });

  const toogleDropdownMenu = () => {
    if(dropdownMenuStyle.display === "none"){
      setDropdownMenuStyle({display: "flex"});
    } else {
      setDropdownMenuStyle({display: "none"});
    }
  }

  return (
    <>
      <Grid padded className="tablet computer only">
        <Menu borderless fluid inverted size="huge">
          <Container>
            <Menu.Item header as={Link} to="/">
              React Chronometer
            </Menu.Item>
            <Menu.Item as={Link} to="/chronometer">
              Chronometer
            </Menu.Item>
            <Menu.Item as={Link} to="/timer">
              Timer
            </Menu.Item>
            <Menu.Item as={Link} to="/cycles">
              Cycles
            </Menu.Item>
            <Menu.Item as={Link} to="/intervals">
              Intervals
            </Menu.Item>
          </Container>
        </Menu>
      </Grid>
      <Grid padded className="mobile only">
        <Menu borderless fluid inverted size="huge">
          <Menu.Item header as={Link} to="/">
            React Chronometer
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
              <Button
                icon
                inverted
                basic
                toggle
                onClick={toogleDropdownMenu}
              >
                <Icon name="content" />
              </Button>
            </Menu.Item>
          </Menu.Menu>
          <Menu
            borderless
            fluid
            inverted
            vertical
            style={dropdownMenuStyle}
          >
            <Menu.Item as={Link} to="/chronometer">
              Chronometer
            </Menu.Item>
            <Menu.Item as={Link} to="/timer">
              Timer
            </Menu.Item>
            <Menu.Item as={Link} to="/cycles">
              Cycles
            </Menu.Item>
            <Menu.Item as={Link} to="/intervals">
              Intervals
            </Menu.Item>
          </Menu>
        </Menu>
      </Grid>
    </>
  );
}