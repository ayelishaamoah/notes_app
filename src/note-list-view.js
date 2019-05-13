(function(exports) {
  function NoteListView() {
    this.noteList = new NoteList
  };

  NoteListView.prototype.renderHtml = function() {
    return `<ul><li><div>${this.noteList.notes[0].text }</div></li>`
  };
  exports.NoteListView = NoteListView
})(this);
