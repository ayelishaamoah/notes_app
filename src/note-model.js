(function(exports) {
  function Note(text) {
    this.text = text;
    this.returnText = function returnText() {
      return this.text
    };
  }
  exports.Note = Note
})(this);
