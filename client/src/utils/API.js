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
    switch (type) {
      case "Title":
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=intitle:" + search + "&maxResults=40")
      case "Author":
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=inauthor:" + search + "&maxResults=40")
      case "Genre":
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=subject:" + search + "&maxResults=40")
      default:
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=intitle:" + search + "&maxResults=40")
    }
  },

};

