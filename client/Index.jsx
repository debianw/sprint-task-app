Tasks = new Mongo.Collection("tasks");

Meteor.subscribe("tasks");

Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"
});

/**
 *
 */

Meteor.startup(() => {
  const el = document.querySelector('#container');

  ReactDOM.render(<App />, el);
});
