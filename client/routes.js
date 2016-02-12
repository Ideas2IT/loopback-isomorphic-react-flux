var React = require('react');
var ReactRouter = require('react-router');
var DefaultRoute = ReactRouter.DefaultRoute;
var Route = ReactRouter.Route;

var AppContainer = require('./components/AppContainer.react')
var Home = require('./components/Home');
var Profile = require('./components/Profile.react');

var routes = (
  <Route handler={AppContainer}>
  	<Route path="profile" handler={Profile} />
    <DefaultRoute handler={Home}/>
  </Route>
);

module.exports = routes;
