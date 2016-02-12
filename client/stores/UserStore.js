var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var Constants = require('../constants/Constants');
var _ = require('underscore');
var API = require('../utils/API');

// Define initial data points
var _userList = API.getUserList();

function getRandomUser() {
  _userList.push(API.getRandomUser());
}

// Extend Cart Store with EventEmitter to add eventing capabilities
var UserStore = _.extend({}, EventEmitter.prototype, {

  // Emit Change event
  emitChange: function() {
    this.emit('change');
  },

  // Add change listener
  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  // Remove change listener
  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  },

  getUsers: function() {
    console.log('getUsers: function() {', _userList);
    return _userList;
  }

});

// Register callback with AppDispatcher
AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch (action.actionType) {

    case Constants.USER_LIST:
      getRandomUser();
      break;

    default:
      return true;
  }

  UserStore.emitChange();

  return true;

});

module.exports = UserStore;
