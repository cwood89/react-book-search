import React from "react";

function SaveButton(props) {
  return (
    <button className="button is-outlined is-rounded is-success"
      onClick={() => props.saveBook(props.id)}>Save Me!</button>
  )
}
export default SaveButton;