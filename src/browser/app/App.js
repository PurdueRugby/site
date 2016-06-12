import React, { PropTypes, Component } from 'react';
import Helmet from 'react-helmet';
import Header from './Header';
import './App.scss';

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  }
  constructor(props) {
    super(props);
  }
  render() {
    const { children } = this.props;
    return (
      <div className='main-container'>
        <Helmet
          htmlAttributes={{'lang': 'en'}}
          title="Purdue Men's Rugby"
          meta={[
            {'name': 'viewport', 'content': 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no'}
          ]}
          link={[
            {'rel': 'stylesheet', 'href': 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css'}
          ]}
        />
        <div className='main-container'>
        </div>
        <Header />
        {children}
      </div>
    );
  }
}
export default App;
