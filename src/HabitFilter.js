var HabitFilter = React.createClass({
  render: function() {
    return (
      <div>
        <button onClick={() => { this.handleFilterClick(7) }}>Daily</button>
        <button onClick={() => { this.handleFilterClick(30) }}>Weekly</button>
        <button onClick={() => { this.handleFilterClick(100) }}>Monthly</button>
      </div>
    );
  },
  handleFilterClick: function(option) {
    console.log("Here");
    this.props.onFilterSubmit({
      frequency: option
    });
  }
});

module.exports = HabitFilter;