define(['backbone'],function(Backbone){

	AppView = Backbone.View.extend({

		initialize:function(){
			console.log("Wahoo!! App Is Initialized");
		}
	});
	return AppView;

});