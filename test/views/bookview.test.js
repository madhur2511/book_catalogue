define(["views/BookView","chai","models"],function(bookview,chai,model){

	var expect = chai.expect;
	describe("Views",function(){
		describe("Book Detail View",function(){
			book = new model({name : "A",author : "A Bc",description : "abc",category : "abc" ,comments:[],url:"/home/madhur/Desktop/Artoo/Book Catalog/assets/A.png"});
			bookview = new bookview({model:book});
			rendered = bookview.render();
			
			it("should return the bookview object class",function(){
				expect(rendered).to.equal(bookview);
			});
			it("on rendering should show a div tag",function(){
				expect(rendered.el.nodeName).to.equal("DIV");  		//tagName and nodeName returns uppercase !!
			});
			it("should contain the book name as A", function() {
   			   expect(rendered.el.innerHTML).to.have.string(book.get('name'));
		    });

			it("should contain the book author as A Bc", function() {
   			   expect(rendered.el.innerHTML).to.have.string(book.get('author'));
		    });

			it("should contain the book Category as abc", function() {
   			   expect(rendered.el.innerHTML).to.have.string(book.get("category"));
		    });

			it("should contain the book Description as abc", function() {
   			   expect(rendered.el.innerHTML).to.have.string(book.get("description"));
		    });
  
		});			
	});

});