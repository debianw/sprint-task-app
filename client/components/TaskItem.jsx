/**
 *
 */

TaskItem = React.createClass({

  /**
   *
   */

  propTypes: {
    task: React.PropTypes.object.isRequired,
    deleteTask: React.PropTypes.func
  },

  /**
   *
   */

  onDelete() {
    const {deleteTask} = this.props;
    deleteTask(this.props.task._id);
  },

  /**
   *
   */

  render() {
    return (
      <li className="item row">
        <div className="text col-xs-10">{this.props.task.text}</div>
        <div className="col-xs-2"><button onClick={this.onDelete}>&times;</button></div>
      </li>
    )
  }
});
