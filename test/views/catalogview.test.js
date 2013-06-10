define(["views/CatalogView","chai","collections","models"],function(view,chai,Catalog,Book){

	var expect = chai.expect;
	describe("Views",function(){
		describe("Catalog View",function(){
			var catalog = new Catalog([
		      new Book({name : "A",author : "A Bc",description : "abc",category : "abc" ,comments:[],url:"/home/madhur/Desktop/Artoo/Book Catalog/assets/A.png"}),
		      new Book({name : "B",author : "D Ef",description : "def",category : "def" ,comments:[],url:"/home/madhur/Desktop/Artoo/Book Catalog/assets/B.jpg"}),
		      new Book({name : "C",author : "G Hi",description : "ghi",category : "ghi" ,comments:[],url:"/home/madhur/Desktop/Artoo/Book Catalog/assets/C.png"}),
		      new Book({name : "D",author : "J Kl",description : "jkl",category : "jkl" ,comments:[],url:"/home/madhur/Desktop/Artoo/Book Catalog/assets/D.jpg"}),
		      new Book({name : "E",author : "M No",description : "mno",category : "mno" ,comments:[],url:"/home/madhur/Desktop/Artoo/Book Catalog/assets/E.png"}),
		      new Book({name : "F",author : "P Qr",description : "pqr",category : "pqr" ,comments:[],url:"/home/madhur/Desktop/Artoo/Book Catalog/assets/F.jpg"})
		      ]);
			catalogview = new view({collection:catalog});
			
			it("should return the catalogview class instance",function(){
				expect(catalogview.render()).to.equal(catalogview);
			});
			it("on rendering should show a div tag",function(){
				expect(catalogview.el.nodeName).to.equal("DIV");  //tagName and nodeName returns uppercase !!
			});
		});
	});
});

