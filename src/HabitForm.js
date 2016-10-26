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
    this.props.onHabitSubmit({name: name, frequency: frequency, current: "true"})
    form.habitName.value = "";
    form.frequency.value = "";
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

module.exports = HabitForm;