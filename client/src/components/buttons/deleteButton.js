import React from "react";

function DeleteButton(props) {
  return (
    <button className="button is-outlined is-danger is-rounded"
      onClick={() => props.deleteBook(props.id)}>Delete!</button>
  )
}
export default DeleteButton;