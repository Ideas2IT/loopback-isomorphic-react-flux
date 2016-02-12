var React = require('react');

var Profile = React.createClass({

  render: function() {
        return (
            <h1>{this.state.userInfo}</h1>
        );
    }
});

module.exports = Profile;
