(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList
  };

  NoteListView.prototype.renderHtmlString = function() {
    if (this.noteList.notes.length == 0) return

    var htmlString = this.noteList.notes.map( note => note.text ).join('</div></li><li><div>')
    var htmlList = '<ul><li><div>' + htmlString + '</div></li></ul>'
    return htmlList;
  };
  exports.NoteListView = NoteListView
})(this);
