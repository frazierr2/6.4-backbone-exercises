var Backbone = require('backbone');
var $ = require('jquery');
var models = require('./models/models');
var views = require('./views/views');

var friends = new models.contactCollection();
// console.log(friends);


var heading = new views.ContactFormPage();
$('.heading').append(heading.render().el);

var users = new views.ContactInputForm({
  collection: friends
});
$('.users').append(users.render().el);


friends.fetch();
