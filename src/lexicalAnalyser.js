var LexicalAnalyzer = {

  run: function(input){
    this.state = 0; // Estado atual
    this.position = 0; // Posicao na linha
    this.line = 0; // Linha
    this.results = []; // Resultados

    // Array de linhas
    input = input.split('\n');

    for (var line = 0; line < input.length; line++) {
      this.position = 0;

      // Adiciona um espaço no final da linha para habilitar a leitura
      input[line] = input[line].trim() + ' ';

      // Automato
      for (var i = 0; i < input[line].length; i++) {
        var char = input[line][i];
        var currentState = this.state;

        switch(char){
          case ' ':
          var token = this.getToken(this.state);

          if (token) {
            this.createTokenResult(line, token, currentState);

          } else {
            var word = input[line].slice(this.position, i);
            this.createErrorResult(line, word);
          }

          // Atualiza a posição atual da linha
          this.position = i + 1;
          this.resetState();
          break;

          default:
          var nextState = this.getNextState(char, currentState);
          this.transitionTo(nextState);
          break;
        }
      }
    }
  },

  getNextState: function(char, state){
    for (var i = 0; i < TRANSITIONS.length; i++) {
      if (char === TRANSITIONS[i].value && state === TRANSITIONS[i].state){
        return TRANSITIONS[i].nextState;
      }
    }
    return 0;
  },

  getToken: function(state){
    for (var i = 0; i < TOKENS.length; i++) {
      if (state === TOKENS[i].state){
        return TOKENS[i];
      }
    }
  },

  resetState: function(){
    this.state = 0;
  },

  transitionTo: function(nextState){
    this.state = nextState;
    Logger.transitionTo(nextState);
  },

  createTokenResult: function(line, token, currentState){
    this.results.push(new Result(line, token.value, currentState));
    Logger.tokenIdentified(token);
  },

  createErrorResult: function(line, word){
    this.results.push(new Result(line, word, 99));
    Logger.unknownWord(word);
  },

  buildResults: function(){
    rows = [];
    for (var i = 0; i < this.results.length; i++) {
      row = {};
      row.Linha = this.results[i].line;
      row.Valor = this.results[i].value;
      row.Codigo = this.results[i].code;

      for (var j = 0 ; j < RESULT_MESSAGES.length; j++){
        if (RESULT_MESSAGES[j].code === this.results[i].code){
          row.Mensagem = RESULT_MESSAGES[j].message;
        }
      }
      rows.push(row);
    }

    this.results = [];
    console.clear();
    console.table(rows);
  }


};
