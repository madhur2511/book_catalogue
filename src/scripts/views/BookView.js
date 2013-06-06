define(["backbone"],function(Backbone){

	var BookView = Backbone.View.extend({

		tagName:'p',

		className:'book',

		events:{
			"click"   :   "change"
		},

		change:function(event){
			router.navigate("books/"+this.model.get('name'),true);
		},

		render:function(){
		    var src = this.model.get("url");
		    $(this.el).html('<img src="' + src + '" alt="Book Image Here" height="200" width="200" >  </img>');
			return this;
		}
	});
	return BookView;
});