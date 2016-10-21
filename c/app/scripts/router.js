var $ = require('jquery');
var Backbone = require('backbone');
var models = require('./models/models');
var views = require('./views/views');

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'post/:id': 'getPost'
  },
  initialize: function() {
    this.collection = new models.PostCollection();
    // console.log(this.collection);
    this.collection.fetch();
  },
  index: function() {
    var title = new views.RecentBlog();
    var blogs = new views.BlogListView({
      collection: this.collection
    });
    // console.log(blogs);
    $('.title').append(title.render().el);
    $('.blogs').append(blogs.render().el);
  },
  getPost: function(id) {
    var blogDetail = this.collection.get(id);
    var blog = new views.BlogDetail({
      model: blogDetail
    });

    $('.app').html(blog.render().el);
  }

});

var router = new AppRouter();
module.exports = router;
