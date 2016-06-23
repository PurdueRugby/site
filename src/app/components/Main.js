/**
* In this file, we create a React component
* which incorporates components providedby material-ui.
*/
import React, { Component } from 'react';

// Theme
import { MuiThemeProvider, darkBaseTheme } from 'material-ui/styles';
import theme from '../config/theme';
// Components
import { Link } from 'react-router';
import Navigation from './Navigation';


class Main extends Component {
  constructor(props) {
    super(props);
    // Bind function calls
    this.handleToggleDrawer = this.handleToggleDrawer.bind(this);
    this.handleRequestChange= this.handleToggleDrawer.bind(this);
    // Set initial state
    this.state = { open: false}
  }

  handleRequestChange(open) {
    this.setState({open});
  }
  // Handler for leftIconButton and menu clicks'
  handleToggleDrawer() {
    this.setState({open: !this.state.open});
  }

  render() {
    const menuItems = ['Home', 'Team', 'Recruiting', 'Donate'];
    return (
      <MuiThemeProvider muiTheme={theme}>
        <div>
          <Navigation
            drawerOpen={this.state.open}
            menuItems={menuItems}
            onRequestChange={this.handleRequestChange}
            //In case location is used to determin title for page
            title='Purdue Rugby'
            toggleDrawer={this.handleToggleDrawer}
          />
          {React.cloneElement(this.props.children, this.children)}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;
