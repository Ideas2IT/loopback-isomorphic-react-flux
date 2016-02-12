var DefaultActions = require('../actions/DefaultActions');
var userList = [
  {
    id: "1",
    name: "Sophia"
  }, {
    id: "2",
    name: "Emma"
  }, {
    id: "3",
    name: "Olivia"
  }, {
    id: "4",
    name: "Emily"
  }, {
    id: "5",
    name: "Lily"
  }
];

var API = {


  getUserList: function() {
    return userList;
  },

  getRandomUser: function() {
    return userList[~~(Math.random() * userList.length)];
  },

  getCurrentUser: function() {
    return "Rajesh";
  }

};

module.exports = API;
