/**
* In this file, we create a React component
* which incorporates components providedby material-ui.
*/
import React, { Component } from 'react';

// Theme
import { getMuiTheme, MuiThemeProvider, darkBaseTheme } from 'material-ui/styles';

// Components
import { Drawer, MenuItem, AppBar, Divider } from 'material-ui';
import { Grid, Col, Row, Button } from 'react-bootstrap';

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
    this.setState({open: true});
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={rugbyTheme}>
        <div>
          <AppBar
            title="Purdue Rugby"
            onLeftIconButtonTouchTap={this.toggleDrawer}
            />
          <Drawer
            open={this.state.open}
            docked={false}
            onRequestChange={ (open) => this.setState({open})}
          >
            <h4>Purdue Rugby</h4>
            <Divider />
            {['Home', 'Team', 'Recruiting', 'Donate'].map((item, i) => <MenuItem key={i} onTouchTap={this.closeDrawer}>{item}</MenuItem>)}
          </Drawer>
          {/* Allows Main component to render children from router */}
          {React.cloneElement(this.props.children, this.children)}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;
