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
    deleteTask      : React.PropTypes.func,
    changeType      : React.PropTypes.func
  },

  /**
   *
   */

  componentDidMount () {
    const {changeType} = this.props;

    $(this.todo).droppable({
      drop: (e, ui) => {
        const id = $(ui.draggable).data('_id');
        changeType(id, 'pending');
      }
    });

    $(this.inProgress).droppable({
      drop: (e, ui) => {
        const id = $(ui.draggable).data('_id');
        changeType(id, 'in-progress');
      }
    });

    $(this.qa).droppable({
      drop: (e, ui) => {
        const id = $(ui.draggable).data('_id');
        changeType(id, 'qa');
      }
    });

    $(this.at).droppable({
      drop: (e, ui) => {
        const id = $(ui.draggable).data('_id');
        changeType(id, 'at');
      }
    });

    $(this.done).droppable({
      drop: (e, ui) => {
        const id = $(ui.draggable).data('_id');
        changeType(id, 'done');
      }
    });
  },

  /**
   *
   */

  getListBox(title, items, key) {
    const { deleteTask } = this.props;
    const clsBox = 'done' === key ? 'box complete' : 'box';

    return (
      <div ref={(ref) => this[key] = ref } className="col-xs-6 col-sm-2 droppable">
        <div className={clsBox}>
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

        { this.getListBox("To Do"         , todoTasks         , "todo") }
        { this.getListBox("In Progress"   , inProgressTasks   , "inProgress") }
        { this.getListBox("QA"            , qaTasks           , "qa") }
        { this.getListBox("AT"            , atTasks           , "at") }
        { this.getListBox("Done"          , doneTasks         , "done") }

      </div>
    );
  }

});
