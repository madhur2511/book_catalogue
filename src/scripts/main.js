require.config({
  paths: {
    jquery        :   'libs/vendor/jquery.min',
    underscore    :   'libs/vendor/underscore-min',
    backbone      :   'libs/vendor/backbone',
    views         :   'views', 
    collections   :   'collections/collection', 
    models        :   'models/model',
    routers       :   'routers/router'
  },

  shim: {						
    underscore: {
      exports: "_"
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    }
  }
});


require(["backbone","routers"],function(Backbone, Router){

  router = new Router(); 
  Backbone.history.start({trigger:true});

});


