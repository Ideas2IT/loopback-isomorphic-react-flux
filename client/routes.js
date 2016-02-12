var React = require('react');
var ReactRouter = require('react-router');
var DefaultRoute = ReactRouter.DefaultRoute;
var Route = ReactRouter.Route;

var AppContainer = require('./components/AppContainer.react')
var Home = require('./components/Home.react');
var Reviewer = require('./components/Reviewer.react');

var routes = (
  <Route handler={AppContainer}>
  	<Route path="reviewers" handler={Reviewer} />
    <DefaultRoute handler={Home}/>
  </Route>
);

module.exports = routes;
