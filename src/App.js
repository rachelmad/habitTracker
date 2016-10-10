var HabitList = React.createClass({
  render: function() {
    return (
      <div>
        This is where the Habit List goes
        <Habit />
      </div>
    );
  }
});

var Habit = React.createClass({
  render: function() {
    return (
      <div>
        This is a sample Habit
      </div>
    )
  }
})

ReactDOM.render(
  <HabitList />,
  document.getElementById('main')
);