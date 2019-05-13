(function(exports) {
  function NoteList() {
    this.notes = [];
  };

  NoteList.prototype.returnNotes = function () {
    return this.notes;
  };
  exports.NoteList = NoteList;
})(this);
