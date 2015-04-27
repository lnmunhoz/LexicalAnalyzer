var TRANSITIONS = [
  // Operadores Aritmeticos
  new Transition('+', 0, 1),
  new Transition('-', 0, 2),
  new Transition('*', 0, 3),
  new Transition('/', 0, 4),
  new Transition('(', 0, 7),
  new Transition(')', 0, 8),

  // Operadores Logicos
  new Transition('<', 0, 5),
  new Transition('>', 0, 6),
  new Transition('=', 0, 9),
  new Transition('=', 9, 10),

  // Palavras Reservadas
  new Transition('n', 0, 11),
  new Transition('e', 11, 12),
  new Transition('w', 12, 13),
  new Transition('i', 0, 14),
  new Transition('n', 14, 15),

  // Loop
  new Transition('f', 0, 20),
  new Transition('o', 20, 21),
  new Transition('r', 21, 22),

  // Condicional
  new Transition('?', 0, 23),


];

var TOKENS = [
  new Token('+', 1),
  new Token('-', 2),
  new Token('*', 3),
  new Token('/', 4),
  new Token('<', 5),
  new Token('>', 6),
  new Token('(', 7),
  new Token(')', 8),
  new Token('=', 9),
  new Token('==', 10),
  new Token('new', 13),
  new Token('in', 15),
  new Token('for', 22),
  new Token('?', 23),
];

var RESULT_MESSAGES = [
  new ResultMessage(1, 'Operador Aritmético'),
  new ResultMessage(2, 'Operador Aritmético'),
  new ResultMessage(3, 'Operador Aritmético'),
  new ResultMessage(4, 'Operador Aritmético'),
  new ResultMessage(5, 'Operador Logico'),
  new ResultMessage(6, 'Operador Logico'),
  new ResultMessage(7, 'Operador Aritmético'),
  new ResultMessage(8, 'Operador Aritmético'),
  new ResultMessage(9, 'Operador Aritmético'),
  new ResultMessage(10, 'Operador Logico'),
  new ResultMessage(13, 'Palavra Reservada'),
  new ResultMessage(15, 'Palavra Reservada'),
  new ResultMessage(22, 'Loop'),
  new ResultMessage(23, 'Condicional'),
  new ResultMessage(99, 'Palavra Desconhecida'),

];
