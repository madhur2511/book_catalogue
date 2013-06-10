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
			App.DATABASE = "http:localhost:5984/books/";
			App.AppView = new AppView();			
		},

		index:function(){
			$.ajax({
				url : App.DATABASE+"_design/all/_view/all",
				async:true,

				success:function(JSONresult){
					books=[];
					obj=JSON.parse(JSONresult);
					if(obj['rows']) 
						for(i=0;i<obj['rows'].length;++i)
							books.push(obj['rows'][i]['value']);
					
					App.catalog = new Catalog([
						new Book(books[0]),
						new Book(books[1]),
						new Book(books[2]),
						new Book(books[3]),
						new Book(books[4]),
						new Book(books[5])
					]);
				},

				complete:function(){
					console.log("Showing Catalog View");
					App.AppView.clearContainer();
					App.AppView.appendChild(new CatalogView({collection:App.catalog}));		
				}

			});
		},

		showonly:function(id){
			$.ajax({
				url : App.DATABASE + id,
				async:true,

				success:function(JSONresult){
					books=[];
					obj=JSON.parse(JSONresult);
					book=[];
					for(i in obj){
						if(i != '_id' || i != '_rev'){
							book[i]=obj[i];
						}
					}
					App.model = new Book(book);
				},

				complete:function(){
					console.log("Showing Book View");
					App.AppView.clearContainer();
					App.AppView.appendChild(new BookView({model:App.model}));
				}
			});	
		}
	});

	return Router;
});