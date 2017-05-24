var MakerickDancer = function(top, left, timeBetweenSteps) {
  this.oldStep = MakepopDancer.prototype.step;
  MakepopDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("rickdancer");
};
MakerickDancer.prototype = Object.create(MakepopDancer.prototype);
MakerickDancer.constructor = MakerickDancer;
MakerickDancer.prototype.step = function(){
  this.oldStep();
  this.$node.toggle();
};