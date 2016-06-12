import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const Header = (props) => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href='/'>Purdue Rugby</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem eventKey={1}><Link to='/news'>News</Link></NavItem>
        <NavDropdown eventKey={2} title='Team'>
          <MenuItem eventKey={2.1}><Link to='/team/recruitment'>Recruitment</Link></MenuItem>
          <MenuItem eventKey={2.2}><Link to='/team/roster'>Roster</Link></MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar>
  );
};

export default Header;
