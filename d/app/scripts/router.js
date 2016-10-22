var Backbone = require('backbone');
var $ = require('jquery');
var models = require('./models/models');
var views = require('./views/views');


var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index'
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
  }
});


var router = new AppRouter();
module.exports = router;
