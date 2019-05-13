
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
  assert.isTrue(noteList.lists === Array)
  };
  testNoteListArray();
})(this);

// function testNoteList() {
//   var text = "Favourite drink: seltzer"
//   var noteList = new NoteList()
//   noteList.addNote(text)
//
//   assert.isTrue(noteList.lists.include)
// }
