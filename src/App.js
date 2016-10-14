var HabitForm = React.createClass({
  getInitialState: function() {
    return {id: 0, name: '', frequency: '', current: "true"}
  },
  handleSubmit: function(event) {
    event.preventDefault();
    var form = document.forms.addHabit;
    var name = form.habitName.value.trim();
    var frequency = form.frequency.value.trim();
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
    return {habits: []};
  },
  componentDidMount: function() {
    $.ajax('/api/habits').done(function(data) {
      this.setState({habits: data});
    }.bind(this));
  },
  addHabit: function(habit) {
    $.ajax({
      url: "/api/habits",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify(habit),
      success: function(data) {
        this.setState({habits: data});
      }.bind(this),
      error: function (xhr, status, err) {
        console.error("Error adding habit", err.toString());
      }.bind(this)
    })
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
  <HabitList />,
  document.getElementById('main')
);