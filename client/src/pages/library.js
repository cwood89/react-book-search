// search page
import React, { Component } from "react";
import Header from "../components/header";
import BookContainer from "../components/bookContainer";
import Modal from "../components/modal";
import Search from "../components/search";
import API from "../utils/API"
import SaveButton from "../components/buttons/saveButton";

class Library extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
      arr1: [],
      arr2: [],
      arr3: [],
      open: false,
      modalInfo: {}
    }
    this.saveBook = this.saveBook.bind(this);
    this.searchSubmit = this.searchSubmit.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }
  componentDidMount() {
    this.getBooks("stephen king", "Author");
  }

  getBooks = (search, type) => {
    API.searchBooks(search, type)
      .then(res => {
        let resArr = []
        for (let i = 0; i < res.data.items.length; i++) {
          let data = {
            id: res.data.items[i].id,
            title: res.data.items[i].volumeInfo.title,
            authors: res.data.items[i].volumeInfo.authors,
            description: res.data.items[i].volumeInfo.description,
            image: res.data.items[i].volumeInfo.imageLinks.thumbnail,
            link: res.data.items[i].selfLink
          }
          resArr.push(data)
        };
        this.sort(resArr)
        this.setState({ data: resArr })
      })
      .catch(err => console.log(err));
  };

  sort(arr) {
    let counter = 1;
    let a1 = []
    let a2 = []
    let a3 = []
    for (let i = 0; i < arr.length; i++) {
      if (counter === 1) {
        a1.push(arr[i])
        counter++
      } else if (counter === 2) {
        a2.push(arr[i])
        counter++
      } else {
        a3.push(arr[i])
        counter = 1
      }

    }
    this.setState({
      arr1: a1,
      arr2: a2,
      arr3: a3
    })
  }

  closeModal() {
    this.setState({ open: false })
  }

  openModal(data) {
    this.setState({
      open: true,
      modalInfo: data
    })

  }

  searchSubmit() {
    let search = document.getElementById("search-val").value;
    let type = document.getElementById("type-val").value;
    if (search.length > 0) {
      this.getBooks(search, type);
      document.getElementById("search-val").value = "";
    }

  }
  saveBook(data) {
    let selected = this.state.data.filter(d => d.id === data);
    console.log(selected[0]);
    API.saveBook(selected[0])
      .then(() => {
        alert("You saved a book!");
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Header />
        <Search
          searchSubmit={this.searchSubmit}
        />
        <BookContainer
          openModal={this.openModal}
          arr1={this.state.arr1}
          arr2={this.state.arr2}
          arr3={this.state.arr3}
        />
        <Modal
          modalInfo={this.state.modalInfo}
          open={this.state.open}
          closeModal={this.closeModal}>
          <SaveButton
            saveBook={this.saveBook}
            id={this.state.modalInfo.id} />
        </Modal>

      </div>
    )
  }
}
export default Library;