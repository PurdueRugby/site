import React, { PropTypes, Component } from 'react';

class Team extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  }

  render() {
    const { children } = this.props;
    return (
      <div>
        <p>This is the Team page</p>
        {children}
      </div>
    );
  }
}

export default Team;
