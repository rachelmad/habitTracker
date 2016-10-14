var HabitForm = React.createClass({
  getInitialState: function() {
    return {id: 0, name: '', frequency: '', current: "true"}
  },
  handleSubmit: function(event) {
    event.preventDefault();
    var form = document.forms.addHabit;
    var name = form.habitName.value.trim();
    var frequency = form.habitName.value.trim();
    if (!name || !frequency) {
      return;
    }
    this.props.onHabitSubmit({id: 0, name: name, frequency: frequency, current: "true"})
    form.habitName.value = "";
    form.habitName.value = "";
  },
  render: function() {
    return (
      <form name="addHabit" onSubmit={this.handleSubmit}>
        <input
          name="habitName"
          type="text"
          placeholder="Habit name"
        />
        <input
          name="frequency"
          type="text"
          placeholder="Frequency"
        />
        <input type="submit" />
      </form>
    );
  }
})

var Habit = React.createClass({
  render: function() {
    return (
      <tr>
        <td>{this.props.id}</td>
        <td>{this.props.name}</td>
        <td>{this.props.frequency}</td>
        <td>{this.props.current}</td>
      </tr>
    );
  }
})

var HabitList = React.createClass({
  getInitialState: function() {
    return {habits: data};
  },
  addHabit: function(habit) {
    var newHabits = this.state.habits.slice();
    var habitId = this.state.habits.length + 1;
    habit.id = habitId;
    newHabits.push(habit);
    this.setState({habits: newHabits});
    console.log(this.state);
  },
  render: function() {
    var dataMap = this.state.habits.map(function(dataList) {
      return (
        <Habit key={dataList.id}
               name={dataList.name} 
               frequency={dataList.frequency}
               current={dataList.current} />
      )
    });
    return (
      <div>
        <table>
          <tbody>
            {dataMap}
          </tbody>
        </table>
        <HabitForm onHabitSubmit={this.addHabit}/>
      </div>
    );
  }
});

ReactDOM.render(
  <HabitList data={data} />,
  document.getElementById('main')
);