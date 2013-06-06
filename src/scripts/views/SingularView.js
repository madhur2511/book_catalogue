define(['backbone','./BookDetailView'],function(Backbone,BookDetailView){

	var SingularView = Backbone.View.extend({

		initialize:function(stuff){
			console.log('Singular View Initialized and Running');
			this.list = $('#div');
			this.book = stuff.model;

			this.bookdetailview = new BookDetailView({model:this.book});
			this.list.append(this.bookdetailview.render().el);
		},

		remove: function() {
			$(this.el).empty().detach();
			return this;
	    },

		clear:function(){
			this.bookdetailview.remove();
			this.remove();
		}

	});

	return SingularView;

});