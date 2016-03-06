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
    doneTasks       : React.PropTypes.array
  },

  /**
   *
   */

  render() {
    const { todoTasks, inProgressTasks, qaTasks, atTasks, doneTasks } = this.props;

    return (
      <div className="row tasks">

        <div className="col-xs-6 col-sm-2">
          <div className="box">
            <h4>To Do</h4>
            <ul>
              {todoTasks.map(function (task) {
                return (<TaskItem key={task._id} task={task} />);
              })}
            </ul>
          </div>
        </div>

        <div className="col-xs-6 col-sm-2">
          <div className="box">
            <h4>In Progress</h4>
            <ul>
              {inProgressTasks.map(function (task) {
                return (<TaskItem key={task._id} task={task} />);
              })}
            </ul>
          </div>
        </div>

        <div className="col-xs-6 col-sm-2">
          <div className="box">
            <h4>QA</h4>
            <ul>
              {qaTasks.map(function (task) {
                return (<TaskItem key={task._id} task={task} />);
              })}
            </ul>
          </div>
        </div>

        <div className="col-xs-6 col-sm-2">
          <div className="box">
            <h4>AT</h4>
            <ul>
              {atTasks.map(function (task) {
                return (<TaskItem key={task._id} task={task} />);
              })}
            </ul>
          </div>
        </div>

        <div className="col-xs-6 col-sm-2">
          <div className="box">
            <h4>Done</h4>
            <ul>
              {doneTasks.map(function (task) {
                return (<TaskItem key={task._id} task={task} />);
              })}
            </ul>
          </div>
        </div>

      </div>
    );
  }

});
