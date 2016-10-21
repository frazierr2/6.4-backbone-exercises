var Backbone = require('backbone');
var $ = require('jquery');
var personform = require('../../templates/personform.hbs');

//*******HEADING********
var ContactFormPage = Backbone.View.extend({
  tagName: 'h1',
  attributes: {
    id: 'contact-header'
  },
  render: function() {
    this.$el.text('Please enter your contact information');
    return this;
  }
});

var ContactInputForm = Backbone.View.extend({
  tagName: 'form',
  attributes: {
    id: 'inputForm'
  },
  template: personform,
  events: {
    'submit': 'addUser'
  },
  render: function() {
    this.$el.html(this.template());
    return this;
  },
  addUser: function(e) {
    e.preventDefault();

    var newUser = {
      'first-name': $('#first-name').val(),
      'last-name': $('#last-name').val(),
      'address': $('#address').val(),
      'phone-number': $('#phone-number').val(),
    }
    this.collection.create(newUser);
  }

});

module.exports = {
  ContactFormPage: ContactFormPage,
  ContactInputForm: ContactInputForm
}
