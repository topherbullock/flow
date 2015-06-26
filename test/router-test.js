var vows  = require('vows'),
    assert = require('assert');

var router = require("./../lib/router");

// router tests
vows.describe('router').addBatch({
  'router classdef exposed on require module.exports': {
    topic: function () {
      return require("./../lib/router");
    },
    'exports.Router is class "router" ': function (router) {
      assert.equal (typeof router.Router, "function");
    }
  },
  'Router Class': {
    topic: function () {
      return require("./../lib/router").Router;
    },
    'can be instantiated' : function (Router) {
      var routerInstance = new Router();
      assert.instanceOf(routerInstance, Router);
    },
    'can be passed fanout flag' : function (Router) {
      var routerInstance = new Router(false);
      assert.instanceOf(routerInstance, Router);
      assert.equal(routerInstance.fanout, false);
    }
  },
  'Router instance' :{
    topic: function() {
      var Router = require("./../lib/router").Router;
      return new Router();
    },
    '.handleData()' : function() {

      // assert.()
    }
  }
}).export(module);
