/**
 *
 */

Dashboard = React.createClass({

  /**
   *
   */

  mixins: [ReactMeteorData],

  /**
   *
   */

  deleteTask(id) {
    Tasks.remove(id);
  },

  /**
   *
   */

  addTask(text) {
    Tasks.insert({
      text      : text,
      createdAt : new Date(),
      type      : 'pending'
    });
  },

  /**
   *
   */

  getMeteorData() {
    const sort = { sort: {createdAt: -1} };

    return {
      todoTasks       : Tasks.find({type: 'pending'}, sort).fetch(),
      inProgressTasks : Tasks.find({type: 'in-progress'}, sort).fetch(),
      qaTasks         : Tasks.find({type: 'qa'}, sort).fetch(),
      atTasks         : Tasks.find({type: 'at'}, sort).fetch(),
      doneTasks       : Tasks.find({type: 'done'}, sort).fetch()
    }
  },

  /**
   *
   */

  render() {
    const { todoTasks, inProgressTasks, qaTasks, atTasks, doneTasks } = this.data;

    return (
      <div className="dashboard">

        <header className="row">
          <div className="col-xs-4">
            <h2>Tasks</h2>
          </div>

          <div className="col-xs-8 frmaddtask">
            <FormTask onSubmit={this.addTask} />
          </div>
        </header>

        <TaskListing
          deleteTask={this.deleteTask}
          todoTasks={todoTasks}
          inProgressTasks={inProgressTasks}
          qaTasks={qaTasks}
          atTasks={atTasks}
          doneTasks={doneTasks} />

      </div>
    );
  }

});
