import React, { PropTypes } from 'react'
import { AppBar, Divider, Drawer, MenuItem } from 'material-ui';
import { Link } from 'react-router';

const Navigation = ({drawerOpen, menuItems, onRequestChange, title, toggleDrawer}) => {
  return (
    <div>
      <AppBar
        title={title}
        onLeftIconButtonTouchTap={toggleDrawer}
        />
      <Drawer
        open={drawerOpen}
        docked={false}
        onRequestChange={onRequestChange}
        >
        <h4>{title}</h4>
        <Divider />
        {/* Create menu items */}
        {menuItems.map((item, i) => <Link key={i} to='/hi'><MenuItem 
          onTouchTap={toggleDrawer}>{item}</MenuItem></Link>)}
      </Drawer>
    </div>
  )
}

Navigation.propTypes = {
  drawerOpen: PropTypes.bool.isRequired,
  menuItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  onRequestChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  toggleDrawer: PropTypes.func.isRequired
}

export default Navigation;
