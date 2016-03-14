var AppDispatcher = require("../dispatcher/AppDispatcher");
var EventEmitter = require("events").EventEmitter;
var Constants = require("../constants/Constants");
var _ = require("underscore");

import {CoffeeShopApi} from "../utils/API";

var _coffeeShops = "";

// Extend Reviewer Store with EventEmitter to add eventing capabilities
var CoffeeShopStore = _.extend({}, EventEmitter.prototype, {

  // Emit Change event
  emitChange: function() {
    this.emit("change");
  },

  // Add change listener
  addChangeListener: function(callback) {
    this.on("change", callback);
  },

  // Remove change listener
  removeChangeListener: function(callback) {
    this.removeListener("change", callback);
  },

  getCoffeeShopList: function() {
    console.log("getUsers: function() {", _coffeeShops);
    return _coffeeShops;
  }

});

// Register callback with AppDispatcher
AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch (action.actionType) {

    case Constants.COFFEE_SHOP_LIST:

      CoffeeShopApi.find().then((response) => {
        _coffeeShops = response.data;
        CoffeeShopStore.emitChange();
      });

      break;

    default:
      return true;
  }
  return true;
});

module.exports = CoffeeShopStore;
