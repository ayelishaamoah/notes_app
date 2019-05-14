(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList
  };

  NoteListView.prototype.renderHtmlString = function() {
    var htmlString = this.noteList.notes.map( note => note.text ).join('</li></div><li><div>')
    var htmlList = '<ul><li><div>' + htmlString + '</div></li></ul>'

    return htmlList;
  };
  exports.NoteListView = NoteListView
})(this);
