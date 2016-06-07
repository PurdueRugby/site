import React, { PropTypes, Component } from 'react';
import Sidebar from '../common/Sidebar';
import Helmet from 'react-helmet';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Helmet
          htmlAttributes={{'lang': 'en'}}
          title="Purdue Men's Rugby"
          meta={[
            {'name': 'viewport', 'content': 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no'}
          ]}
        />
        <div className='main-container'>
          <Sidebar />
        </div>
      </div>
    );
  }
}
export default App;
