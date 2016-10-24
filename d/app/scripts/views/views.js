var $ = require('jquery');
var Backbone = require('backbone');
var bookmarkForm = require('../../templates/bookmarkForm.hbs');
var tabview = require('../../templates/tabview.hbs');
var bookmarkitem = require('../../templates/bookmarkitem.hbs');
var TagFilterList = require('../../templates/TagFilterList.hbs');

//*****TITLE OF APP*****
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

//***** FORM FOR BOOKMARKS ADDING*****
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

// //*****VIEW OF BOOKMARKS PULLED FROM SERVER*****
var BookmarkListView = Backbone.View.extend({
  tagName: 'table',
  className: 'table table-bordered table-hover',
  attributes: {
    id: 'listView'
  },
  template: tabview,
  render: function() {
    this.$el.html(this.template());
    return this;
  },
  initialize: function() {
    this.listenTo(this.collection, 'add', this.renderBookmarks);
  },
  renderBookmarks: function(tags) {
    var bookmarks = new BookmarkItem({
      model: tags
    });
    this.$el.append(bookmarks.render().el);
  }
});

var BookmarkItem = Backbone.View.extend({
  tagName: 'tbody',
  attributes: {
    id: 'itemView'
  },
  template: bookmarkitem,
  render: function() {
    var context = this.model.toJSON();
    var BookmarkTemp = this.template(context);
    this.$el.html(BookmarkTemp);
    return this;
  }
});

//*****TAG LIST VIEW******
var TagList = Backbone.View.extend({
  tagName: 'h3',
  attributes: {
    id: 'taglist'
  },
  template: TagFilterList,
  render: function() {
    var context = this.model.toJSON();
    var tagList = this.template(context);
    this.$el.html(tagList);
    return this;
  }
});

module.exports = {
  BookmarkApp: BookmarkApp,
  BookMarkInput: BookMarkInput,
  BookmarkListView: BookmarkListView,
  BookmarkItem: BookmarkItem,
  TagList: TagList
}
