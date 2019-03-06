import React from "react";
import Col from "../column"
import Img from "../img"


function BookContainer(props) {
  return (
    <div className="container">
      <div className="columns is-1">
        <Col>
          {props.arr1.map((data) => {
            return (
              <Img
                id={data.id}
                key={data.id}
                image={data.image}
                alt={data.name}
                openModal={() => props.openModal(data)}
                thisData={data} />
            )
          })}
        </Col>

        <Col>
          {props.arr2.map((data) => {
            return (
              <Img
                id={data.id}
                key={data.id}
                image={data.image}
                openModal={() => props.openModal(data)}
                thisData={data}
              />
            )
          })}
        </Col>

        <Col>
          {props.arr3.map((data) => {
            return (
              <Img
                id={data.id}
                key={data.id}
                image={data.image}
                openModal={() => props.openModal(data)}
                thisData={data}
              />
            )
          })}
        </Col>
      </div>

    </div>
  )
}


export default BookContainer;
