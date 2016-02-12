var React = require('react');
var DefaultActions = require('../actions/DefaultActions');
var UserStore = require('../stores/UserStore');

var Home = React.createClass({
  render: function() {
    return (
      <div>
        <a href="/reviewers">Reviewers</a>
        <div>Is the CoffeeShop open?</div>
        <div>{this.props.status}</div>
      </div>
    );
  }
});

module.exports = Home;
