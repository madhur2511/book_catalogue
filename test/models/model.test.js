define(["models","chai"],function(model,chai){
  var expect = chai.expect;
  describe('Models', function() {
    describe('Sample Model', function() {
      var sample = new model();
    
      it('should have default "name" property to "zzz"', function() {
        expect(sample.get("name")).to.equal('zzz');
      });

      it('should have default "author" property to "Z Zz"', function() {
        expect(sample.get("author")).to.equal("Z Zz");
      });

      it('should default "category" property to "zz"', function() {
        expect(sample.get("category")).to.equal("zz");
      });

      it('should default "description" property to "zzzzz"', function() {
        expect(sample.get("description")).to.equal("zzzzz");
      });

      it('should default "url" property to [blank]', function() {  
        expect(sample.get("url")).to.equal("");
      });

    });
   });

});
