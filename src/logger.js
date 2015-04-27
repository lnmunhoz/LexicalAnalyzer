var Logger = {
  currentState: function(state){
    console.log('CURRENT_STATE: ' + state);
  },
  transitionTo: function(state){
    console.log('TRANSITION_TO: '+ state);
  },
  tokenIdentified: function(token){
    console.log('TOKEN IDENTIFIED: ' + token.value);
  },
  unknownWord: function(value){
    console.log('UNKNOWN WORD: ' + value);
  }

};
