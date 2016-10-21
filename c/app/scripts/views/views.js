var $ = require('jquery');
var Backbone = require('backbone');
var blogview = require('../../templates/blogview.hbs');
var blogbody = require('../../templates/blogbody.hbs');
var blogcontent = require('../../templates/blogcontent.hbs');


var RecentBlog = Backbone.View.extend({
  tagName: 'h1',
  attributes: {
    id: 'title'
  },
  render: function() {
    this.$el.text('Recent Blogs');
    return this;
  }
});

var BlogListView = Backbone.View.extend({
  tagName: 'table',
  className: 'table table-bordered table-hover',
  attributes: {
    id: 'listView'
  },
  template: blogview,
  render: function() {
    var blogContent = this.template();
    this.$el.html(blogContent);
    return this;
  },
  initialize: function() {
    this.listenTo(this.collection, 'add', this.renderBlogPost);
    // console.log(this.collection);
  },
  renderBlogPost: function(data) {
    // console.log('renderBlogPost');
    var blogs = new BlogItem({
      model: data
    });
    this.$el.append(blogs.render().el);
  }
});

var BlogItem = Backbone.View.extend({
  tagName: 'tbody',
  attributes: {
    id: 'itemView'
  },
  template: blogbody,
  render: function() {
    var context = this.model.toJSON();
    var blogTemp = this.template(context);
    this.$el.html(blogTemp);
    return this;
  }
});

var BlogDetail = Backbone.View.extend({
  tagName: 'h1',
  attributes: {
    id: 'blogDetail'
  },
  template: blogcontent,
  render: function() {
    var modelData = this.model.toJSON();
    var blogtemp = this.template(modelData);
    this.$el.html(blogtemp);
    return this;
  }
});

module.exports = {
  RecentBlog: RecentBlog,
  BlogListView: BlogListView,
  BlogItem: BlogItem,
  BlogDetail: BlogDetail
}
