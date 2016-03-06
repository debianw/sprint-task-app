/**
 *
 */

FormTask = React.createClass({

  /**
   *
   */

  onSubmit(e) {
    e.preventDefault();

    const {onSubmit} = this.props;
    const input = ReactDOM.findDOMNode(this.refs.newtask);
    const value = input.value.trim();

    onSubmit(value);
    input.value = "";
  },

  /**
   *
   */

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <table>
          <tbody>
            <tr>
              <td><label htmlFor="newtask">New</label></td>
              <td><input ref="newtask" type="text" className="form-control" id="newtask" placeholder="enter task" /></td>
              <td><button type="submit" className="btn btn-default">+</button></td>
            </tr>
          </tbody>
        </table>
      </form>
    );
  }

});
