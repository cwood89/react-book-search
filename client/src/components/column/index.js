import React from "react";

function Col(props) {
  return (
    <div className="column">
      {props.children}
    </div>
  )
};

export default Col;