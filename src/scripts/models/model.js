define(['backbone'],function(Backbone){
    var Book = Backbone.Model.extend({
    defaults:{
      name:"zzz",
      author:"Z Zz",
      description:"zzzzz",
      category:"zz",
      comments:[],
      url:""
    }
  });
  return Book;

});


