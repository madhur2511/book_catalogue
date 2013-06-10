define(["backbone","models"],function(Backbone,Book){

	var BookSet =Backbone.Collection.extend({

		model:Book

	});

	return BookSet;

});
