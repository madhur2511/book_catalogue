define(["models","collections","chai"],function(model,collection,chai){

   var expect=chai.expect;
   describe('Collections', function() {
    describe('Sample Collection', function() {
      //var book = new model();
      var catalogue = new collection([
    		new model({name : "A",author : "A Bc",description : "abc",category : "abc" ,comments:[],url:"/home/madhur/Desktop/Artoo/B.png"}),
  		  new model({name : "B",author : "D Ef",description : "def",category : "def" ,comments:[],url:"/home/madhur/Desktop/Artoo/B.png"}),
  		  new model({name : "C",author : "G Hi",description : "ghi",category : "ghi" ,comments:[],url:"/home/madhur/Desktop/Artoo/B.png"}),
  		  new model({name : "D",author : "J Kl",description : "jkl",category : "jkl" ,comments:[],url:"/home/madhur/Desktop/Artoo/B.png"}),
  		  new model({name : "E",author : "M No",description : "mno",category : "mno" ,comments:[],url:"/home/madhur/Desktop/Artoo/B.png"}),
  		  new model({name : "F",author : "P Qr",description : "pqr",category : "pqr" ,comments:[],url:"/home/madhur/Desktop/Artoo/B.png"})
  		]);
      it('collection should have length = 6 ',function(){
          expect(catalogue).to.have.length('6');
      })
      });
    });
  });
