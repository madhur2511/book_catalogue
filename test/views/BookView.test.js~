define(["bookviews","chai","models"],function(view,chai,model){

	var expect = chai.expect;
	describe("Views",function(){
		describe("Book View",function(){
			book = new model();
			bookview = new view({model:book});
			rendered = bookview.render();

			it("should return the view object class",function(){
				expect(rendered).to.equal(bookview);
			});
			it("on rendering should show a p tag",function(){
				expect(rendered.el.nodeName).to.equal("P");  		//tagName and nodeName returns uppercase !!
			});
			
		});

	});
});

