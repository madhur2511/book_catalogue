define(["views/AppView","chai"],function(view,chai){

	var expect = chai.expect;
	describe("Views",function(){
		describe("App View",function(){
			appview = new view();
			
			it("should have the linkage to a div",function(){
				expect(appview.tagName).to.equal("div");
			});
			
		});
	});
});

