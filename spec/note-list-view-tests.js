(function(exports) {
  function testInitializeNoteListView() {
    var noteList = new NoteList()
    var noteListView = new NoteListView(noteList)

    assert.isTrue(noteListView.noteList === noteList)
  };
  testInitializeNoteListView();
})(this);

(function(exports) {
  function returnsSingleHtmlString() {
    var htmlString = "<ul><li><div>Favourite food: pesto</div></li></ul>"

    var noteList = new NoteList()
    noteList.addNote("Favourite food: pesto")

    var noteListView = new NoteListView(noteList)

    assert.isTrue(noteListView.renderHtmlString() === htmlString)
  };
  returnsSingleHtmlString();
})(this);

(function(exports) {
  function returnMultipleHtmlString() {
    var htmlString = "<ul><li><div>Favourite food: pesto</div></li><li><div>Favourite food: pizza</div></li></ul>"

    var noteList = new NoteList()
    noteList.addNote("Favourite food: pesto")
    noteList.addNote("Favourite food: pizza")
    var noteListView = new NoteListView(noteList)

    assert.isTrue(noteListView.renderHtmlString() === htmlString)
  };
  returnMultipleHtmlString();
})(this);

(function(exports) {
  function returnsBlankHtmlString() {

    var noteList = new NoteList()

    var noteListView = new NoteListView(noteList)

    assert.isTrue(noteListView.renderHtmlString() === undefined )
  };
  returnsBlankHtmlString();
})(this);
