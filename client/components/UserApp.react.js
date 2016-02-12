var React = require('react');
var UserStore = require('../stores/UserStore');

var UserList = require('./UserList.react');

function getInitialState () {
  return {
    user: UserStore.getUsers()
  };
}

// Define main Controller View
var UserApp = React.createClass({

  // Get initial state from stores
  getInitialState: function() {
    return getInitialState();
  },

  componentDidMount: function() {
    UserStore.addChangeListener(this._onChange);
  },

  // Remove change listeners from stores
  componentWillUnmount: function() {
    UserStore.removeChangeListener(this._onChange);
  },

  // Render our child components, passing state via props
  render: function() {
  	return (
      <div>
        <UserList userList={this.state.user}/>
      </div>
  	);
  },

  _onChange: function() {
    this.setState(getInitialState());
  }

});

module.exports = UserApp;
