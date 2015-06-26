var stream  = require('stream'),
    util = require('util');

var Channel = require('./channel');

var router = module.exports = {};

var Router = router.Router  = function(fanout) {
  this.inputStream = new stream.Duplex();
  this.outputStream = new stream.Duplex();
  if(typeof fanout === 'boolean'){
    this.fanout = fanout;
  }
  
  router.list.push(this);

};

router.list = [];

Router.prototype.matchers = [];

Router.prototype.fanout = true;

Router.prototype.handleMessage = function(message) {
  var matching, i;

  for (i = this.matchers.length - 1; i >= 0; i--) {
    
    matching = this.matchers[i];
    
    if(matching(message)){
      matching.stream.write(message);
      if(!this.fanout) break;
    }

  }

};

Router.prototype.addMatcher = function(matcher, target ) {
  if (target !== null){
    matcher.stream = target;
  }

  this.matchers.push(matcher);
};




