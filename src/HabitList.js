var HabitForm = require('./HabitForm');
var Habit = require('./Habit');

var HabitList = React.createClass({
  getInitialState: function() {
    return {habits: []};
  },
  componentDidMount: function() {
    $.ajax('/api/habits?frequency=7').done(function(data) {
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
        var newHabits = this.state.habits.slice();
        newHabits.push(data);
        this.setState({habits: newHabits});
        console.log("New habit added");
      }.bind(this),
      error: function (xhr, status, err) {
        console.error("Error adding habit", err.toString());
      }.bind(this)
    })
  },
  render: function() {
    var dataMap = this.state.habits.map(function(dataList) {
      return (
        <Habit key={dataList._id}
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

module.exports = HabitList;