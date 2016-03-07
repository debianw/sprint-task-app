/**
 * Collection
 */

Tasks = new Mongo.Collection("tasks");

/**
 *
 */

Meteor.publish("tasks", function () {
  return Tasks.find({
    owner: this.userId
  });
});

/**
 *
 */

Meteor.methods({

  /**
   *
   */

  addTask(text) {
    if (!Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    Tasks.insert({
      text      : text,
      createdAt : new Date(),
      type      : 'pending',
      owner     : Meteor.userId(),
      username  : Meteor.user().username
    });
  },

  /**
   *
   */

  removeTask(taskId) {
    const task = Tasks.findOne(taskId);

    if (task.owner !== Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    Tasks.remove(taskId);
  },

  /**
   *
   */

  changeType(taskId, type) {
    const task = Tasks.findOne(taskId);

    if (task.owner !== Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    Tasks.update(taskId, {
      $set: {type: type}
    });
  }

});
