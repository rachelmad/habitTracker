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
  render: function() {
    var dataMap = this.props.data.map(function(dataList) {
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

ReactDOM.render(
  <HabitList data={data} />,
  document.getElementById('main')
);