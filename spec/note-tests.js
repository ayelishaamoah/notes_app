
(function(exports) {
  function testTextProperty() {
    var text = "My favourite language is JavaScript"
    var note = new Note(text);

    noteText = note.returnText();

    assert.isTrue(noteText === text);
  };
  testTextProperty();
})(this);

(function(exports) {
  function testNoteListArray() {
  var noteList = new NoteList()
  assert.isTrue(Array.isArray(noteList.notes))
  };
  testNoteListArray();
})(this);
