var MakepopDancer = function(top, left, timeBetweenSteps) {
  this.oldStep = MakeDancer.prototype.step;
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('popdancer');
};
MakepopDancer.prototype = Object.create(MakeDancer.prototype);
MakepopDancer.constructor = MakepopDancer;
MakepopDancer.prototype.step = function(){
  this.oldStep();
  //this.$node.toggle();
};
MakepopDancer.prototype.lineup = function(top,left){
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};