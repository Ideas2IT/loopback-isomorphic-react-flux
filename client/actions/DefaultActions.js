var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/Constants');

// Define action methods
var DefaultActions = {
  getUsers: function() {
    AppDispatcher.handleAction({
      actionType: Constants.USER_LIST
    })
  }
};

module.exports = DefaultActions;
