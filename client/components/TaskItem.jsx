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

  componentDidMount() {
    $(this.el).draggable({
      revert: 'invalid',
      cursor: 'crosshair',
      opacity: 0.8,
      zIndex: 100
    }).data('_id', this.props.task._id);
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
      <li ref={(ref) => this.el = ref} className="item row draggable">
        <div className="text col-xs-10">{this.props.task.text}</div>
        <div className="col-xs-2"><button onClick={this.onDelete}>&times;</button></div>
      </li>
    )
  }
});
