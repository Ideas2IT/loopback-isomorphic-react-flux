var React = require('react');
var API = require('../utils/API');

var Profile = React.createClass({
  getInitialState: function() {
    return { userInfo : API.getCurrentUser() };
  },
  render: function() {
        return (
            <h1>{this.state.userInfo}</h1>
        );
    }
});

module.exports = Profile;
