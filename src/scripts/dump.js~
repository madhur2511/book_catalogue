	$(function(){
		var AppRouterClass = Backbone.Router.extend({           
			routes:{					   						    
				"" : "index",
				"/:name" : "bookname"
			},
			bookname: function(bookname){
				alert(bookname);	
			},
			index: function(){
				alert("Welcome !");
			}			
		});
	    router = new AppRouterClass;	
		var Book = Backbone.Model.extend({});

		var Catalogue_Class = Backbone.Collection.extend({
			model:Book
		});

		var catalogue = new Catalogue_Class([
  		  new Book({name : "A",author : "A Bc",description : "abc",category : "abc" ,comments:[],url:"/home/madhur/Desktop/Artoo/B.png"}),
		  new Book({name : "B",author : "D Ef",description : "def",category : "def" ,comments:[],url:"/home/madhur/Desktop/Artoo/B.png"}),
		  new Book({name : "C",author : "G Hi",description : "ghi",category : "ghi" ,comments:[],url:"/home/madhur/Desktop/Artoo/B.png"}),
		  new Book({name : "D",author : "J Kl",description : "jkl",category : "jkl" ,comments:[],url:"/home/madhur/Desktop/Artoo/B.png"}),
		  new Book({name : "E",author : "M No",description : "mno",category : "mno" ,comments:[],url:"/home/madhur/Desktop/Artoo/B.png"}),
		  new Book({name : "F",author : "P Qr",description : "pqr",category : "pqr" ,comments:[],url:"/home/madhur/Desktop/Artoo/B.png"})
		]);
	
		var BookView = Backbone.View.extend({
			tagName: "p",
			className: "book",
			events:{
				"click":"display"
			},
			display: function(model){
				router.navigate("name/"+this.model.get("name"),true);
			},
			render: function(){
				$(this.el).html("<img src="+this.model.get("url")+" height=\"100\" width=\"100\"></img>");
			        return this;
        		}				
		});
		var PageView = Backbone.View.extend({
			el: $("body"),

			initialize:function(){
				this.list = $("#div");
				catalogue.forEach(function(book){
					var bookview = new BookView({model:book});
					this.list.append(bookview.render().el);
					
				},this);
			}
		});	
	app = new PageView();
	Backbone.history.start({pushState:true});
	});

	</script>




			//App.Catalog 
/*
			 this.catalog = new Catalog([
		      new Book({name : "A",author : "A Bc",description : "abc",category : "abc" ,comments:[],url:"/home/madhur/Desktop/Artoo/assets/A.png"}),
		      new Book({name : "B",author : "D Ef",description : "def",category : "def" ,comments:[],url:"/home/madhur/Desktop/Artoo/assets/B.jpg"}),
		      new Book({name : "C",author : "G Hi",description : "ghi",category : "ghi" ,comments:[],url:"/home/madhur/Desktop/Artoo/assets/C.png"}),
		      new Book({name : "D",author : "J Kl",description : "jkl",category : "jkl" ,comments:[],url:"/home/madhur/Desktop/Artoo/assets/D.jpg"}),
		      new Book({name : "E",author : "M No",description : "mno",category : "mno" ,comments:[],url:"/home/madhur/Desktop/Artoo/assets/E.png"}),
		      new Book({name : "F",author : "P Qr",description : "pqr",category : "pqr" ,comments:[],url:"/home/madhur/Desktop/Artoo/assets/F.jpg"})
		      ]);


			this.App = new AppView();
			// render AppView
		},

		showonly:function(id){

		 //App.AppView.clearContainer();

	     catalog.length;++i){
	        if(this.catalog.at(i).get('name') === id) {
	        	model = this.catalog.at(i);
	        	break; 
	        }
	      }


	      //self.singview = new SingularView({model:model});

	      App.AppView.append(new BookView({model: ...}));
	    },

		index:function(){
		
			//App.AppView.clearContainer();
      		//self.catalogview = new CatalogView({collection : this.catalog});

      		App.AppView.append(new CatalogView({collection:App.Data})
		}
*/
