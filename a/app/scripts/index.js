var Backbone = require('backbone');
var $ = require('jquery');
var models = require('./models/models');
var views = require('./view/views');

var blogPost = new models.PostCollection();
// console.log(blogPost);

var heading = new views.BlogInputPage();
$('.heading').append(heading.render().el);

var postForm = new views.BlogInput({
  collection: blogPost
});
$('.post').append(postForm.render().el);


blogPost.fetch();
