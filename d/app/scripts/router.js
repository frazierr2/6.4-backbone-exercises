var Backbone = require('backbone');
var $ = require('jquery');
var models = require('./models/models');
var views = require('./views/views');


var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index'
      // 'tags/:id': 'getTags'
  },
  initialize: function() {
    this.collection = new models.BookmarkCollection();
    // console.log(this.collection);
    this.collection.fetch();
  },
  index: function() {
    var title = new views.BookmarkApp();
    $('.title').append(title.render().el);
    var form = new views.BookMarkInput({
      collection: this.collection
    });
    $('.app').append(form.render().el);
    var bookmarks = new views.BookmarkListView({
      collection: this.collection
    });
    $('.tableview').append(bookmarks.render().el);
  },
  getTags: function(id) {
      var tagDetail = this.collection.get(id);
      var tag = new views.TagList({
        model: tagDetail
      });
      $('.tags').html(tag.render().el);
    }
    //DO A THIS.COLLECTION.FILTER() INSTEAD OF .GET
});


var router = new AppRouter();
module.exports = router;
