var React = require("react");
var ReactDOM = require("react-dom");
var routes = require("./routes");
var Router = require("react-router");
var bootstrap = window.__BOOTSTRAP__ || {};

Router.run(routes, Router.HistoryLocation, function (Handler) {
  ReactDOM.render(<Handler bootstrap={bootstrap} />,
    document.getElementById("root"));
});