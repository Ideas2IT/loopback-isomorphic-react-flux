var React = require('react');
var DefaultActions = require('../actions/DefaultActions');
var UserStore = require('../stores/UserStore');

var UserList = React.createClass({
  getUsers: function() {
    DefaultActions.getUsers();
  },

  render: function() {
    return (
      <div>
      <button onClick={this.getUsers} className="btn btn-primery waves-effect waves-light">
        Get User
      </button>
        <ul>
          {this.props.userList.map(function (user) {
            return (
              <li>{user}</li>
            )
          })}
        </ul>
      </div>
    );
  }

});

module.exports = UserList;
