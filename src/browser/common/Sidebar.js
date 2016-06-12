import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.scss';

class Sidebar extends Component {

  render() {
    return (
      <Menu>
        <a id="Home" className="menu-item" href="/">Home</a>
        <a id="Team" className="menu-item" href="/about">Team</a>
        <a id="Recruiting" className="menu-item" href="/contact">Recruiting</a>
        <a id="News" className="menu-item" href="/contact">News</a>
        <a id="Donate" className="menu-item" href="/contact">Donate</a>

      </Menu>
   );
  }
}

export default Sidebar;
