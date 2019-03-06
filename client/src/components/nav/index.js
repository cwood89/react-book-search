import React from "react";

function Nav() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <span className="icon" >
            <i className="fas fa-book-dead fa-2x"></i>
          </span>
        </a>

        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBooks">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBooks" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="/library">
            Library
          </a>

          <a className="navbar-item" href="/bookshelf">
            Bookshelf
          </a>
        </div>

        <div className="navbar-end">
          <a href="https://github.com/cwood89/react-book-search" className="navbar-item">
            <span className="icon">
              <i className="fab fa-github fa-2x"></i>
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;