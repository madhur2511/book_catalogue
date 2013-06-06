define(["backbone"],function(Backbone){

	var BookDetailView = Backbone.View.extend({

		tagName:'div',

		className:'single_book',

		render:function(){
			html  = '<div id="img"> <img src="' + this.model.get("url") + '" alt="Book Image Here" height="200" width="200" >  </img> </div>';
			html += "<div id='det'> <h2>Name : " + this.model.get('name') + "</h2>";
			html += "<h3> Author : " + this.model.get('author') + "</h3>";
			html += "<h3> Category : " + this.model.get('category') + "</h3>";	
			html += "<h3> Description : " + this.model.get('description') + "</h3> </div>";

		    $(this.el).html(html);
			return this;
		}
	});
	return BookDetailView;
});