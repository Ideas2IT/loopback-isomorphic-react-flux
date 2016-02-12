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
  var Reviewer = app.models.Reviewer;

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

  app.get('/reviewers', function (req, res) {
    var router = createRoute(req.url);
    router.run(function (Handler) {
      Reviewer.find().then(function(model) {
        console.log("model",model);
        var reviewers = {reviewers: model};
        const html = React.renderToString(
          <Handler bootstrap = {reviewers} />
        );
        res.render('index', {
          markup: html,
          bootstrap: JSON.stringify(reviewers)
        });
      });
    });
  });

}

