var React = require('react');
var CoffeeShopActions = require('../actions/CoffeeShopActions');
var CoffeeShopStore = require('../stores/CoffeeShopStore');

var Home = React.createClass({
  getInitialState: function(){
    return {
      CoffeeShops: ""
    };    
  },
  componentDidMount: function() {
    CoffeeShopStore.addChangeListener(this.onChange);
  },

  componentWillUnmount: function() {
    CoffeeShopStore.removeChangeListener(this.onChange);
  },
  render: function() {
    return (
      <div>
        <a href="/reviewers">Reviewers</a>
        <div>Is the CoffeeShop open?</div>
        <div>{this.props.status}</div>
        <button onClick={this.getCoffeeShopList} > List all CoffeeShops </button>
        { this.state.CoffeeShops ? 
          this.state.CoffeeShops.map(function(CoffeeShop){
            return (
              <div>{CoffeeShop.name} {CoffeeShop.city}</div>   
            )
          })
          : null
        }
      </div>
    );
  },

  getCoffeeShopList: function(){
    CoffeeShopActions.getAllCoffeeShops();
  },

  /**
   * This callback function will be invoked, If emits happend on EmailStore.
   * It made changes on its state, So the UI component re-rendered.
   */
  onChange: function() {
    this.setState({
      CoffeeShops: CoffeeShopStore.getCoffeeShopList(),
    });
  }

});

module.exports = Home;
