import React from 'react';
import Router from 'react-router';
import reactRoutes from '../../client/routes';

module.exports = function routes(app) {

  function createRoute (url){
    return Router.create({
      location: url,
      routes: reactRoutes
    });
  }

  var CoffeeShop = app.models.CoffeeShop;

  app.get('/', function (req, res) {
    var router = createRoute(req.url);
    var status = { status: CoffeeShop.status()._d.v };
    router.run(function (Handler) {
      const html = React.renderToString(
        <Handler bootstrap={status} />
      );
      res.render('index', {
        markup: html,
        bootstrap: JSON.stringify(status)
      });
    });
  });
  
}

