var TokenFragment = function(value, state, nextState){
  this.value = value;
  this.state = state;
  this.nextState = nextState;
};

var TRANSITION_TABLE = [
  // Operadores Logicos
  new TokenFragment('+', 0, 1),
  new TokenFragment('-', 0, 2),
  new TokenFragment('*', 0, 3),
  new TokenFragment('/', 0, 4),

  // Loop
  new TokenFragment('f', 0, 5),
  new TokenFragment('o', 5, 6),
  new TokenFragment('r', 6, 7),

  // Condidional
  new TokenFragment('i', 0, 9),
  new TokenFragment('f', 9, 10)
];

var Logger = {
  currentState: function(state){
    console.log('CURRENT_STATE: ' + state);
  },
  transitionTo: function(state){
    console.log('TRANSITION_TO: '+ state);
  }
};


window.LexicalAnalyzer = {

  run: function(input, state){
    this.state = state;

    for (var i = 0; i < input.length; i++) {
      for(var j = 0; j < TRANSITION_TABLE.length; j++){

        if (TRANSITION_TABLE[j].state === this.state){
          if (TRANSITION_TABLE[j].value === input[i]){

            Logger.transitionTo(TRANSITION_TABLE[j].nextState);
            this.run(input.slice(i, input.length), TRANSITION_TABLE[j].nextState);

          }
        }
      }
    }
  }
};
