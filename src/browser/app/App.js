var React = require('react');
var PropTypes = React.PropTypes;

var Main = React.createClass({

  render: function() {
    return (
      <div className='main-container'>
        {this.props.children}
      </div>
    );
  }

});

module.exports = Main;
