var AppDispatcher = require("../dispatcher/AppDispatcher");
var Constants = require("../constants/Constants");

// Define action methods
var CoffeeShopActions = {
  getAllCoffeeShops: function() {
    AppDispatcher.handleAction({
      actionType: Constants.COFFEE_SHOP_LIST
    });
  }
};

module.exports = CoffeeShopActions;
