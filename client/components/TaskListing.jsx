/**
 *
 */

TaskListing = React.createClass({

  /**
   *
   */

  propTypes: {
    todoTasks       : React.PropTypes.array,
    inProgressTasks : React.PropTypes.array,
    qaTasks         : React.PropTypes.array,
    atTasks         : React.PropTypes.array,
    doneTasks       : React.PropTypes.array,
    deleteTask      : React.PropTypes.func
  },

  /**
   *
   */

  getListBox(title, items) {
    const { deleteTask } = this.props;

    return (
      <div className="col-xs-6 col-sm-2">
        <div className="box">
          <h4>{title}</h4>
          <ul>
            {items.map(task => {
              return (<TaskItem key={task._id} task={task} deleteTask={deleteTask} />);
            })}
          </ul>
        </div>
      </div>
    );
  },

  /**
   *
   */

  render() {
    const { todoTasks, inProgressTasks, qaTasks, atTasks, doneTasks } = this.props;

    return (
      <div className="row tasks">

        { this.getListBox("To Do"         , todoTasks) }
        { this.getListBox("In Progress"   , inProgressTasks) }
        { this.getListBox("QA"            , qaTasks) }
        { this.getListBox("AT"            , atTasks) }
        { this.getListBox("Done"          , doneTasks) }

      </div>
    );
  }

});
