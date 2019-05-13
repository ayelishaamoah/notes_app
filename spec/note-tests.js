(function(exports) {
  function testTextProperty() {
    var text = "My favourite language is JavaScript"
    var note = new Note(text);

    noteText = Note.returnText();

    if(noteText !== text) {
      throw new Error(`Expected returnText to equal "${text}"`)
    }
  };
  testTextProperty();
})(this);
