var $ = require('jquery');
var Backbone = require('backbone');
var models = require('./models/models');
var views = require('./views/views');

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index'
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
  }

});

var router = new AppRouter();
module.exports = router;
