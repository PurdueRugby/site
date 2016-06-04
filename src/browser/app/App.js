var React = require('react');
var PropTypes = React.PropTypes;

var App = React.createClass({

  render: function() {
    return (
      <div className='main-container'>
        {this.props.children}
      </div>
    );
  }

});

module.exports = Main;
