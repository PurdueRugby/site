/**
 * In this file, we create a React component
 * which incorporates components providedby material-ui.
 */
import React, {Component} from 'react';

// Theme
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

// Components
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import Divider from 'material-ui/Divider';

const rugbyTheme = getMuiTheme({
  palette: {
    textColor: '#ceb888',
    canvasColor: '#212121',
    primary1Color: '#ceb888',
    alternateTextColor: '#212121'
  }
});

class Main extends Component {


  constructor(props, context) {
    super(props, context);

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
