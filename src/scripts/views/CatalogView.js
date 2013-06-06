define(['backbone','./BookView'], function(Backbone,BookView) {
  
  var CatalogView = Backbone.View.extend({

  	initialize:function(stuff){
  		console.log('Catalog View is Initialized and Showing ');
  		this.collection = stuff.collection;
  		bookviews=[];
  		this.render();
  	},

  	render:function(){
  		this.list = $("#div");
  		this.collection.forEach(function(book){
			bookview = new BookView({model:book});
			bookviews.push(bookview);
			this.list.append(bookview.render().el);
		},this);
	},

	remove: function() {
		$(this.el).empty().detach();
		return this;
	},

	clear:function(){
		for(i in bookviews)
		{
			bookviews[i].remove();
		}
		this.remove();
	}

  });

  return CatalogView;
});
