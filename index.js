function build(){
  var input = document.getElementById('input').value;

  LexicalAnalyzer.run(input);
  LexicalAnalyzer.buildResults();
}
