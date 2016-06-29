import React, { Component } from 'react';
// Theme
import { MuiThemeProvider, darkBaseTheme } from 'material-ui/styles';
import theme from '../config/theme';
// Components
import { Link } from 'react-router';
import Navigation from '../components/Navigation';

class MainContainer extends Component {
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
    // item array for sidebar items
    const menuItems = [
      {name: 'Home', path: '/'},
      {name: 'Team', path: '/team'},
      {name: 'Recruiting', path: '/recruitment'},
      {name: 'Donate', path: '/donate'}
      ];
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

export default MainContainer;
