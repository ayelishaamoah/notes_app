
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

(function(exports) {
  function testReturnNotes() {
  var noteList = new NoteList()
  assert.isTrue(noteList.returnNotes() === noteList.notes)
  };
  testReturnNotes();
})(this);

(function(exports) {
  function testAddNote() {
  var noteList = new NoteList()
  noteList.addNote("Favourite drink: seltzer")

  assert.isTrue(noteList.notes[0].text == "Favourite drink: seltzer")
  };
  testAddNote();
})(this);
