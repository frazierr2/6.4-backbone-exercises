var $ = require('jquery');
var Backbone = require('backbone');
var bookmarkForm = require('../../templates/bookmarkForm.hbs');

var BookmarkApp = Backbone.View.extend({
  tagName: 'h1',
  attributes: {
    id: 'title'
  },
  render: function() {
    this.$el.text('Bookmark App');
    return this;
  }
});

var BookMarkInput = Backbone.View.extend({
  tagName: 'form',
  className: 'col-md-4 well',
  template: bookmarkForm,
  events: {
    'submit': 'saveBookmark'
  },
  render: function() {
    this.$el.html(this.template());
    return this;
  },
  saveBookmark: function(e) {
    e.preventDefault();

    var newBookmark = {
      title: $('#bookmark-title').val(),
      'web-address': $('#web-address').val(),
      tags: $('#tags').val()
    };
    // console.log(newBookmark);
    this.collection.create(newBookmark);
  }
});

module.exports = {
  BookmarkApp: BookmarkApp,
  BookMarkInput: BookMarkInput
}
