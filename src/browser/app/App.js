import React, { PropTypes, Component } from 'react';


class App extends Component {
  render() {
    return (
      <div className='main-container'>
        <p>Hello, World</p>
        {this.props.children}
      </div>
    );
  };
}

export default App;
