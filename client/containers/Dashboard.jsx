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

  addTask(text) {
    console.log('add new task => ', text);
  },

  /**
   *
   */

  getMeteorData() {
    return {
      todoTasks       : Tasks.find({type: 'pending'}).fetch(),
      inProgressTasks : Tasks.find({type: 'in-progress'}).fetch(),
      qaTasks         : Tasks.find({type: 'qa'}).fetch(),
      atTasks         : Tasks.find({type: 'at'}).fetch(),
      doneTasks       : Tasks.find({type: 'done'}).fetch()
    }
  },

  /**
   *
   */

  render() {
    const { todoTasks, inProgressTasks, qaTasks, atTasks, doneTasks } = this.data;

    console.log('todoTasks => ', todoTasks);
    console.log('inProgressTasks => ', inProgressTasks);
    console.log('qaTasks => ', qaTasks);
    console.log('atTasks => ', atTasks);
    console.log('doneTasks => ', doneTasks);

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
          todoTasks={todoTasks}
          inProgressTasks={inProgressTasks}
          qaTasks={qaTasks}
          atTasks={atTasks}
          doneTasks={doneTasks} />

      </div>
    );
  }

});
