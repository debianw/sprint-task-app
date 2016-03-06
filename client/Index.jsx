Tasks = new Mongo.Collection("tasks");

Meteor.subscribe("tasks");

/**
 *
 */

Meteor.startup(() => {
  const el = document.querySelector('#container');

  ReactDOM.render(<App />, el);
});
