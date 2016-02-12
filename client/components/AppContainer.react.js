var React = require('react');

var ReactRouter = require('react-router');
var RouteHandler = ReactRouter.RouteHandler;

var API = require('../utils/API');

// Load Mock API Call
API.getUserList();

var AppContainer = React.createClass({
  render: function () {
    return (
    	<div>
	      	<RouteHandler {...this.props.bootstrap} />
      	</div>
    );
  }
});

module.exports = AppContainer;
