/**
 * In this file, we create a React component
 * which incorporates components providedby material-ui.
 */
import React, { Component } from 'react';

// Theme
import { getMuiTheme, MuiThemeProvider, darkBaseTheme } from 'material-ui/styles';

// Components
import { Drawer, MenuItem, AppBar, Divider } from 'material-ui';

const rugbyTheme = getMuiTheme({
  palette: {
    textColor: '#ceb888',
    canvasColor: '#212121',
    primary1Color: '#ceb888',
    alternateTextColor: '#212121'
  }
});

class Main extends Component {

  constructor(props) {
    super(props);
    // Bind function calls
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
    this.openDrawer = this.openDrawer.bind(this);

    // Set initial state
    this.state = { open: true }
  }

  // Handler for leftIconButton
  toggleDrawer() {
    this.setState({open: !this.state.open});
  }

  closeDrawer() {
    this.setState({open: false});
  }

  openDrawer() {
    this.setState({open: false});
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={rugbyTheme}>
        <div>
          <AppBar
              title=""
              onLeftIconButtonTouchTap={this.toggleDrawer}
              />
          <Drawer open={this.state.open}>
            <h2>Purdue Rugby</h2>

            <MenuItem>Home</MenuItem>
            <MenuItem>Team</MenuItem>
            <MenuItem>Recruiting</MenuItem>
            <MenuItem>Donate</MenuItem>
            <Divider />
            <MenuItem onTouchTap={this.closeDrawer}>Close</MenuItem>
          </Drawer>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;
