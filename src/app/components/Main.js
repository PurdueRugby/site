/**
* In this file, we create a React component
* which incorporates components providedby material-ui.
*/
import React, { Component } from 'react';

// Theme
import { MuiThemeProvider, darkBaseTheme } from 'material-ui/styles';
import theme from '../config/theme';
// Components
import { Drawer, MenuItem, AppBar, Divider } from 'material-ui';
import { Link } from 'react-router';



class Main extends Component {
  constructor(props) {
    super(props);
    // Bind function calls
    this.handleToggleDrawer = this.handleToggleDrawer.bind(this);

    // Set initial state
    this.state = { open: false}
  }

  // Handler for leftIconButton
  handleToggleDrawer() {
    this.setState({open: !this.state.open});
  }

  render() {
    const menuItems = ['Home', 'Team', 'Recruiting', 'Donate'];
    return (
      <MuiThemeProvider muiTheme={theme}>
        <div>
          <AppBar
            title="Purdue Rugby"
            onLeftIconButtonTouchTap={this.handleToggleDrawer}
            />
          <Drawer
            open={this.state.open}
            docked={false}
            onRequestChange={ (open) => this.setState({open})}
          >
            <h4>Purdue Rugby</h4>
            <Divider />
            {/* Create menu items */}
            {menuItems.map((item, i) => <MenuItem key={i} onTouchTap={this.handleToggleDrawer}>{item}</MenuItem>)}
          </Drawer>
          {/* Allows Main component to render children from router */}
          {React.cloneElement(this.props.children, this.children)}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;
