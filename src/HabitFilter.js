var HabitFilter = React.createClass({
  handleFilterClick: function() {
    this.props.onFilterSubmit({
      frequency: 0
    });
  },
  render: function() {
    return (
      <div>
        <button onClick={this.handleFilterClick}>Click Me!</button>
      </div>
    );
  }
});

module.exports = HabitFilter;