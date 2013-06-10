require.config({
  paths: {
    'jquery'         :   '../src/scripts/libs/vendor/jquery.min',
    'underscore'     :   '../src/scripts/libs/vendor/underscore-min',
    'backbone'       :   '../src/scripts/libs/vendor/backbone',  
    'models'         :   '../src/scripts/models/model',
    'collections'    :   '../src/scripts/collections/collection',
    'views'          :   '../src/scripts/views',
    'mocha'          :   '../src/scripts/libs/vendor/mocha/mocha',
    'chai'           :   '../src/scripts/libs/vendor/chai/chai'
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
    //'views/bookview.test.js'
    //'views/appview.test.js'
    'views/catalogview.test.js'
    //'views/thumbview.test.js'
    //'models/model.test.js'
    //'collections/collection.test.js'
  ], function(require) {
    mocha.run();
  });
 
});
