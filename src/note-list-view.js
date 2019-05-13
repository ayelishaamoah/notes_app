(function(exports) {
  function NoteListView() {
    this.noteList = new NoteList
  };

  NoteListView.prototype.renderHtml = function() {
    var htmlString = ``;
    this.noteList.notes.forEach(function(note) {
      htmlString += `<li><div>${ note.text }</div></li>`
    });
    return htmlString;
  };
  exports.NoteListView = NoteListView
})(this);
