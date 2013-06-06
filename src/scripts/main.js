require.config({
  paths: {
    jquery: 'libs/jquery.min',
    underscore: 'libs/underscore-min',
    backbone: 'libs/backbone'
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

require(["routers/router","backbone"], function(Router , Backbone){

  router = new Router();

  Backbone.history.start({trigger:true});

});



