(function(exports) {
  function Note(text) {
    this.text = text;
    };

    Note.prototype.returnText = function() {
      return this.text
  }
  exports.Note = Note;
})(this);
