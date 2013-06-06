define(["backbone",'../models/model'],function(Backbone,Book){

	var BookSet =Backbone.Collection.extend({

		model:Book

	});

	return BookSet;

});
