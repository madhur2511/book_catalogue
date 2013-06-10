define(['backbone','views/ThumbView'], function(Backbone,ThumbView) {
  
  var CatalogView = Backbone.View.extend({

  	className:"appchild",

  	initialize:function(stuff){
  		console.log('Catalog View is Initialized and Showing ');
  		this.collection = stuff.collection;
  	},

  	render:function(){
  		this.collection.forEach(function(book){
			var thumbview = new ThumbView({model:book});
			$(this.el).append(thumbview.render().el);
		},this);
		return this;
	  }
  });

  return CatalogView;
});
