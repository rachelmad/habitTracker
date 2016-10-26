var Habit = React.createClass({
  render: function() {
    return (
      <tr>
        <td>{this.props._id}</td>
        <td>{this.props.name}</td>
        <td>{this.props.frequency}</td>
        <td>{this.props.current}</td>
      </tr>
    );
  }
})

module.exports = Habit;