(function(exports) {
  function testInitializeNoteListView() {
    var noteListView = new NoteListView()
    noteListView.noteList.addNote("Favourite drink: seltzer")
    assert.isTrue(noteListView.noteList.notes[0].text === "Favourite drink: seltzer")
  };
  testInitializeNoteListView();
})(this);

(function(exports) {
  function testSingleNoteListViewRenderHtml() {
    var noteListView = new NoteListView()
    noteListView.noteList.addNote("Favourite drink: seltzer")
    var html = `<li><div>Favourite drink: seltzer</div></li>`
    assert.isTrue(noteListView.renderHtml() == html)
  };
  testSingleNoteListViewRenderHtml();
})(this);

(function(exports) {
  function testMultipleNoteListViewRenderHtml() {
    var noteListView = new NoteListView()
    noteListView.noteList.addNote("Favourite drink: seltzer")
    noteListView.noteList.addNote("Favourite food: pesto")

    var html = "<li><div>Favourite drink: seltzer</div></li><li><div>Favourite drink: seltzer</div></li>"

    assert.isTrue(noteListView.renderHtml() === html)
  };
  testMultipleNoteListViewRenderHtml();
})(this);
