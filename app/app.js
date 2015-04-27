(function(){
  var tbody = $('tbody');
  TOKENS.forEach(function(token){
    var tr = $('<tr>');
    tr.append('<td>' + token.value + '</td>');
    tr.append('<td>' + token.state + '</td>');
    for (var j = 0 ; j < RESULT_MESSAGES.length; j++){
      if (RESULT_MESSAGES[j].code === token.state){
        tr.append('<td>' + RESULT_MESSAGES[j].message + '</td>');
      }
    }
    tbody.append(tr);
  });
})();


function build(){
  var input = document.getElementById('input').value;

  LexicalAnalyzer.run(input);
  LexicalAnalyzer.buildResults();
}
