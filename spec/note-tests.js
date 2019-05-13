(function(exports) {
  function testTextProperty() {
    var text = "My favourite language is JavaScript"
    var note = new Note(text);

    noteText = note.returnText();

    if(noteText !== text) {
      throw new Error(`Expected returnText to equal "${text}" but got ${noteText}`)
    } else {
      console.log(`Expected returnText to equal "${text}" and got ${noteText}`)
    }
  };
  testTextProperty();
})(this);
