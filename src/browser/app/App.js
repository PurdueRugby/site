import React, { PropTypes, Component } from 'react';
import Sidebar from '../common/Sidebar';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='main-container'>
        <Sidebar />
      </div>
    );
  }
}
export default App;
