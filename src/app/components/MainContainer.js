import React, { Component } from 'react';
// Theme
import { MuiThemeProvider } from 'material-ui/styles';
import theme from '../config/theme';
// Components
import { Link } from 'react-router';
import Navigation from './Navigation';
import Paper from 'material-ui/Paper';
import Helmet from 'react-helmet';

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
      {name: 'Recruitment', path: '/recruitment'},
      {name: 'Donate', path: '/donate'}
      ];
    return (
      <div className='main-container'>
        <Helmet
          title='Purdue Rugby'
          htlmAttributes={{'class': 'no-js', 'lang': 'en'}}
          meta={[
            {'charset': 'utf-8'},
            {'httpEquiv': 'X-UA-Compatible', 'content': 'IE=edge'},
            {'name': 'description', 'content': 'Purdue Men\'s Rugby Team\'s Offical Site'}
          ]}
          link={[
            {'rel': 'stylesheet', 'type': 'text/css', 'href': 'main.css'},
            {'rel': 'stylesheet', 'href': 'https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css'}
          ]}
        />
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
            <Paper style={{marginLeft: '50px'}}>
              {React.cloneElement(this.props.children, this.children)}
            </Paper>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default MainContainer;
