var data = [
  {
    id: 1,
    name: "Make the bed", 
    frequency: 1, 
    current: "true"
  },
  {
    id: 2,
    name: "Laundry",
    frequency: 7,
    current: "false"
  }
]

var HabitList = React.createClass({
  getInitialState: function() {
    return {habits: data};
  },
  addBug: function(habit) {
    console.log("Adding bug");
    var newHabits = this.state.habits.slice();
    newHabits.push(habit);
    this.setState({habits: newHabits})
  },
  testAddBug: function() {
    this.addBug({
      id: 3,
      name: "Swiffer",
      frequency: 7,
      current: "false"
    });
  },
  render: function() {
    var dataMap = this.state.habits.map(function(dataList) {
      return (
        <Habit id={dataList.id}
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
        <button onClick={this.testAddBug}>Add Bug</button>
      </div>
    );
  }
});

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

// class AddBugButton extends React.Component {
//   constructor() {
//     super();
//   }
//   addBug() {
//     console.log("");
//   }
//   render() {
//     return(
//       <div onClick={this.test}>
//         Add Bug
//       </div>
//     );
//   }
// }

ReactDOM.render(
  <HabitList data={data} />,
  document.getElementById('main')
);