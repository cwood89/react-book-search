var mongoose = require("mongoose");


var Schema = mongoose.Schema;



var BookSchema = new Schema({
  id: {
    type: String
  },
  title: {
    type: String
  },
  authors: {
    type: Array
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  link: {
    type: String
  },
  saved: {
    type: Boolean,
    default: false
  }
});


var Book = mongoose.model("Book", BookSchema);


module.exports = Book;
