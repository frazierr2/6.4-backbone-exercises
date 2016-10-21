var Backbone = require('backbone');
var $ = require('jquery');


var contact = Backbone.Model.extend({
  idAttribute: '_id'
});

var contactCollection = Backbone.Collection.extend({
  model: contact,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/TIY-contacts'
});

module.exports = {
  contact: contact,
  contactCollection: contactCollection
}
