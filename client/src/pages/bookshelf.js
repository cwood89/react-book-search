// saved page
import React, { Component } from "react";
import Header from "../components/header";
import BookContainer from "../components/bookContainer";
import Modal from "../components/modal";
import API from "../utils/API"
import DeleteButton from "../components/buttons/deleteButton";
class Bookshelf extends Component {
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
    this.deleteBook = this.deleteBook.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  componentDidMount() {
    this.getBooks();
  }

  getBooks() {
    API.getBooks()
      .then(res => {
        console.log(res.data)
        this.sort(res.data);
        this.setState({ data: res.data })
      })
      .catch(err => console.log(err))
  }

  deleteBook(data) {

    API.deleteBook(data)
      .then(() => {
        alert("Deleted");
        this.getBooks();
      })
  }

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

  render() {
    return (
      <div>
        <Header />
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
          <DeleteButton
            deleteBook={this.deleteBook}
            id={this.state.modalInfo.id} />
        </Modal>
      </div>
    )
  }
}

export default Bookshelf;
