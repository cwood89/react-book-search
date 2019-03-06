import React from "react";
import "./style.scss"
function Modal(props) {
  return (
    <div className={props.open ? "modal is-active" : "modal"}>
      <div className="modal-background" onClick={() => props.closeModal()}></div>
      <div className="modal-content">


        <div className="card">
          <div className="card-image">
            <figure className="modal-image">
              <img src={props.modalInfo.image} alt={props.modalInfo.name} />
            </figure>
          </div>
          <div className="card-content">
            <h1>{props.modalInfo.title}</h1>
            <p>Written by {props.modalInfo.authors}.</p>
            <p>{props.modalInfo.description}</p>
            <p>{props.modalInfo.link}</p>
            {props.children}
          </div>
        </div>


      </div>
    </div>
  )
}

export default Modal;