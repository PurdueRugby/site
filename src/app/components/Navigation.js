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
        {menuItems.map((item, i) => <Link key={i} to={item.path}><MenuItem
          onTouchTap={toggleDrawer}>{item.name}</MenuItem></Link>)}
      </Drawer>
    </div>
  )
}

Navigation.propTypes = {
  drawerOpen: PropTypes.bool.isRequired,
  menuItems: PropTypes.array.isRequired,
  onRequestChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  toggleDrawer: PropTypes.func.isRequired
}

export default Navigation;
