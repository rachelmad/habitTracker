var HabitList = require('./HabitList');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Redirect = require('react-router').Redirect;

var NoMatch = React.createClass({
  render: function() {
    return (
      <h2>No match for the route</h2>
    );
  }
});

ReactDOM.render(
  (
    <Router>
      <Route path="/habits" component={HabitList} />
      <Redirect from="/" to="/habits" />
      <Route path="*" component={NoMatch} />
    </Router>
  ),
  document.getElementById('main')
);