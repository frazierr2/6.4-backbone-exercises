var Backbone = require('backbone');
var $ = require('jquery');
var postTemplate = require('../../template/postTemplate.hbs');

//******HEADING******
var BlogInputPage = Backbone.View.extend({
  tagName: 'h1',
  attributes: {
    id: 'blog-header'
  },
  render: function() {
    this.$el.text('Enter your new blog post below:');
    return this;
  }
});

//******TAKING DATA AND POSTING******
var BlogInput = Backbone.View.extend({
  tagName: 'form',
  attributes: {
    id: 'inputForm'
  },
  template: postTemplate,
  events: {
    'submit': 'addPost'
  },
  render: function() {
    this.$el.html(this.template());
    return this;
  },
  addPost: function(e) {
    e.preventDefault();

    var newPost = {
      title: $('#title').val(),
      'blog-content': $('#blog-content').val()
    };
    console.log(this.collection);
    this.collection.create(newPost);
  }
});








module.exports = {
  BlogInputPage: BlogInputPage,
  BlogInput: BlogInput
}
