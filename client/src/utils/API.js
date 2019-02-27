import axios from "axios";

export default {

  // Gets all books from Database
  getBooks: function () {
    return axios.get("/db/books");
  },
  // Deletes book from Database
  deleteBook: function (id) {
    return axios.delete("/db/books/" + id);
  },
  // Saves book to Database
  saveBook: function (bookData) {
    return axios.post("/db/books", bookData);
  },
  // Search Google Books
  searchBooks: function (search, type) {
    let result;
    switch (type) {
      case "title":
        result = axios.get("https://www.googleapis.com/books/v1/volumes?q=intitle:" + search);
        break;
      case "author":
        result = axios.get("https://www.googleapis.com/books/v1/volumes?q=inauthor:" + search);
        break;
      case "genre":
        result = axios.get("https://www.googleapis.com/books/v1/volumes?q=subject:" + search);
        break;
    }
    return result;
  },

};

