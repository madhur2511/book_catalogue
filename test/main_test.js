require.config({
  paths: {
    'jquery'         :   'libs/jquery.min',
    'underscore'     :   'libs/underscore-min',
    'backbone'       :   'libs/backbone',  
    'models'         :   '../src/scripts/models/model',
    'collections'    :   '../src/scripts/collections/collection',
    'bookviews'      :   '../src/scripts/views/BookView',
    'bookdetailview' :   '../src/scripts/views/BookDetailView',
    'mocha'          :   'libs/mocha/mocha',
    'chai'           :   'libs/chai/chai'
  },
  shim: {						
    underscore: {
      exports: "_"
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    jquery:{
      exports: 'jquery'
    },
    mocha:{
      exports: 'mocha'  
    },
    chai:{
      exports: 'chai'
    }
    }
  });
 
require(['require', 'chai', 'mocha', 'jquery'], function(require, chai, mocha){
  
  var expect = chai.expect;
  mocha.setup('bdd'); 

  require([
    //'views/BookView.test.js'
    'views/BookDetailView.test.js'
    //'models/model.test.js'
    //'collections/collection.test.js'
  ], function(require) {
    mocha.run();
  });
 
});
