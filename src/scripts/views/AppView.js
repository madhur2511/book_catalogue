define(['backbone'],function(Backbone){

	AppView = Backbone.View.extend({

		el: "#outer",

		initialize:function(){
			console.log("Wahoo!! App Is Initialized");
		},

		clearContainer: function() {
			$(this.el).html("");						//clear the App Container
			if(this.child) this.child.remove();			
		},

		appendChild: function(child) {
			this.child = child;
			$(this.el).append(child.render().el);
		}

	});	

	return AppView;
});
	