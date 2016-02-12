module.exports = function(app) {

  const mydb = app.dataSources.psqlDs;

  mydb.automigrate('CoffeeShop', function(err) {
    if (err) throw err;
 
    app.models.CoffeeShop.create([
      {name: 'Bel Cafe', city: 'Vancouver'},
      {name: 'Three Bees Coffee House', city: 'San Mateo'},
      {name: 'Caffe Artigiano', city: 'Vancouver'},
    ], function(err, coffeeShops) {
      if (err) throw err;
 
      console.log('Models created: \n', coffeeShops);
    });
  });

  mydb.automigrate('Reviewer', function(err) {
    if (err) throw err;
 
    app.models.Reviewer.create([
      {email: 'foo@bar.com', name: 'foobar'},
      {email: 'john@doe.com', name: 'john'},
      {email: 'jane@doe.com', name: 'jane'}
    ], function(err, reviewers) {
      if (err) throw err;
 
      console.log('Models created: \n', reviewers);
    });
  });

};
