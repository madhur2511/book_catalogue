define(['views/AppView','views/CatalogView','views/ThumbView','views/BookView','models','collections',"backbone"], 
  function(AppView, CatalogView, ThumbView, BookView, Book, Catalog, Backbone){

	var Router = Backbone.Router.extend({

		routes:{
			"books/:id"  :   "showonly",
			""           :   "index"
		},

		initialize:function(stuff){
			console.log('Router Initialized and Running');
			window.App = {};										//creating namespace for the App.

			App.AppView = new AppView();

			App.catalog = new Catalog([
		      new Book({name : "A",author : "A Bc",description : "abc",category : "abc" ,comments:[],url:"/home/madhur/Desktop/Artoo/Book Catalog/assets/A.png"}),
		      new Book({name : "B",author : "D Ef",description : "def",category : "def" ,comments:[],url:"/home/madhur/Desktop/Artoo/Book Catalog/assets/B.jpg"}),
		      new Book({name : "C",author : "G Hi",description : "ghi",category : "ghi" ,comments:[],url:"/home/madhur/Desktop/Artoo/Book Catalog/assets/C.png"}),
		      new Book({name : "D",author : "J Kl",description : "jkl",category : "jkl" ,comments:[],url:"/home/madhur/Desktop/Artoo/Book Catalog/assets/D.jpg"}),
		      new Book({name : "E",author : "M No",description : "mno",category : "mno" ,comments:[],url:"/home/madhur/Desktop/Artoo/Book Catalog/assets/E.png"}),
		      new Book({name : "F",author : "P Qr",description : "pqr",category : "pqr" ,comments:[],url:"/home/madhur/Desktop/Artoo/Book Catalog/assets/F.jpg"})
		      ]);
		},

		index:function(){
			App.AppView.clearContainer();
			console.log("Showing Catalog View");
			App.AppView.appendChild(new CatalogView({collection:App.catalog}));

		},

		showonly:function(id){
			App.AppView.clearContainer();
			console.log("Showing Book View");

			for(i = 0 ; i < App.catalog.length ; ++i){
	        	if(App.catalog.at(i).get('name') === id) {
	        		model = App.catalog.at(i);
	        		break; 
	        	}
	      	}

			App.AppView.appendChild(new BookView({model:model}));
		}

	});

	return Router;
});