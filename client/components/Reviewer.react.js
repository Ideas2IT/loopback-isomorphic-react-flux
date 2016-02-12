var React = require('react');

var Reviewer = React.createClass({
  render: function() {
    return (
      <div>
        <div> Reviewers list </div>
        <ol>
          {
            this.props.reviewers.map(function (reviewer) {
              return (
                <li>{reviewer.name} - {reviewer.email}</li>
              );
            })
          }
        </ol>
      </div>
    );
  }
});

module.exports = Reviewer;
