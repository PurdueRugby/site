import React, { PropTypes, Component } from 'react';
import Sidebar from '../common/Sidebar'

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const style = {background: '#000000'}
    const hstyle = {color: 'white'}
    return (

      <div className='outer-container' style={style}>
        <Sidebar />
        <div className='main-container'>
        </div>
      </div>
    );
  };
}

export default App;
