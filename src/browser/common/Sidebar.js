import React, { PropTypes, Component } from 'react';
var Menu = require('react-burger-menu').slide;

class Sidebar extends Component {
  render () {
    return (
      <Menu>
         <a id="home" className="menu-item" href="/">Home</a>
         <a id="about" className="menu-item" href="/about">About</a>
         <a id="contact" className="menu-item" href="/contact">Contact</a>
       </Menu>
   );
  }
}

export default Sidebar;
