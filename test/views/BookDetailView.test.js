define(["bookdetailview","chai","models"],function(bookdetailview,chai,model){

	var expect = chai.expect;
	describe("Views",function(){
		describe("Book Detail View",function(){
			book = new model();
			bookdetailview = new bookdetailview({model:book});
			rendered = bookdetailview.render();
			
			it("should return the book detail view object class",function(){
				expect(rendered).to.equal(bookdetailview);
			});
			it("on rendering should show a div tag",function(){
				expect(rendered.el.nodeName).to.equal("DIV");  		//tagName and nodeName returns uppercase !!
			});
			it("should contain the book name", function() {
   			   expect(rendered.el.innerHTML).to.have.string("Name");
		    });

			it("should contain the book author", function() {
   			   expect(rendered.el.innerHTML).to.have.string("Author");
		    });

			it("should contain the book Category", function() {
   			   expect(rendered.el.innerHTML).to.have.string("Category");
		    });

			it("should contain the book Description", function() {
   			   expect(rendered.el.innerHTML).to.have.string("Description");
		    });
  
		});			
	});

});