import React from "react";
import "./style.scss"

function Img(props) {
  let number = Math.floor(Math.random() * Math.floor(4) + 1);
  let size;
  switch (number) {
    case 1:
      size = "small";
      break;
    case 2:
      size = "med";
      break;
    case 3:
      size = "large";
      break;
    case 4:
      size = "x-large";
      break;
  }


  return (
    <div className={size}>
      < img id={props.id} src={props.image} alt={props.name} onClick={() => props.openModal(props.thisData)} />
    </div>
  )
}
export default Img;