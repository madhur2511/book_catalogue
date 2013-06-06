define(['../views/AppView','../views/CatalogView','../views/SingularView','../collections/collection','../models/model',"backbone"], 
  function(AppView, CatalogView, SingularView, Catalog, Book, Backbone){

	var Router = Backbone.Router.extend({

		routes:{
			"books/:id"       :   "showonly",
			""           :   "index"
		},

		initialize:function(stuff){
			console.log('Router Initialized and Running')

			this.App = new AppView();

			var self = this;

		    this.catalog = new Catalog([
		      new Book({name : "A",author : "A Bc",description : "abc",category : "abc" ,comments:[],url:"/home/madhur/Desktop/Artoo/assets/A.png"}),
		      new Book({name : "B",author : "D Ef",description : "def",category : "def" ,comments:[],url:"/home/madhur/Desktop/Artoo/assets/B.jpg"}),
		      new Book({name : "C",author : "G Hi",description : "ghi",category : "ghi" ,comments:[],url:"/home/madhur/Desktop/Artoo/assets/C.png"}),
		      new Book({name : "D",author : "J Kl",description : "jkl",category : "jkl" ,comments:[],url:"/home/madhur/Desktop/Artoo/assets/D.jpg"}),
		      new Book({name : "E",author : "M No",description : "mno",category : "mno" ,comments:[],url:"/home/madhur/Desktop/Artoo/assets/E.png"}),
		      new Book({name : "F",author : "P Qr",description : "pqr",category : "pqr" ,comments:[],url:"/home/madhur/Desktop/Artoo/assets/F.jpg"})
		      ]);

		},

		showonly:function(id){

	      if(self.catalogview){
	      	self.catalogview.clear();
	      }

	      for(i=0;i<this.catalog.length;++i){
	        if(this.catalog.at(i).get('name') == id) model = this.catalog.at(i); 
	      }
	      self.singview = new SingularView({model:model});

	    },

		index:function(){
			if(self.singview){
			   self.singview.clear(); 
			}
      		self.catalogview = new CatalogView({collection : this.catalog});

		}

	});

	return Router;

});