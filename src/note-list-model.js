(function(exports) {
  function NoteList() {
    this.notes = [];
  };

  NoteList.prototype.returnNotes = function () {
    return this.notes;
  };

  NoteList.prototype.addNote = function(text) {
    note = new Note(text)
    this.notes.push(note)
  }
  exports.NoteList = NoteList;
})(this);
