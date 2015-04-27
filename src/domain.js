var Transition = function(value, state, nextState){
  this.value = value;
  this.state = state;
  this.nextState = nextState;
};

var Token = function(value, state){
  this.value = value;
  this.state = state;
};

var Result = function(line, value, code){
  this.line = line;
  this.value = value;
  this.code = code;
};

var ResultMessage = function(code, message){
  this.code = code;
  this.message = message;
};
