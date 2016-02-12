var React = require('react');
var Router = require('react-router');
var routes = require('./routes');
var bootstrap = window.__BOOTSTRAP__ || {};

Router.run(routes,  Router.HistoryLocation, function (Handler) {
  React.render(<Handler bootstrap={bootstrap} />, document.getElementById('root'));
});
