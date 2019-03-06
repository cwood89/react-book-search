import React from "react";
import Nav from "../nav";

function Header(props) {
  return (
    <section className="hero is-large is-danger is-bold">
      <div className="hero-head">
        <Nav />
      </div>
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            Book Club
        </h1>
          <h2 className="subtitle">
            Find your next chapter one.
        </h2>
        </div>
      </div>
    </section>
  )
}
export default Header;