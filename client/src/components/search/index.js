import React from "react";

function Search(props) {
  return (
    <div className="card">
      <div className="card-header">
        <p className="card-header-title">
          Search
        </p>
      </div>
      <div className="card-content">
        <div className="field has-addons has-addons-centered">
          <p className="control">
            <span className="select is-large is-danger is-rounded">
              <select id="type-val">
                <option>Title</option>
                <option>Author</option>
                <option>Genre</option>
              </select>
            </span>
          </p>
          <p className="control">
            <input
              className="input is-large is-danger is-rounded"
              type="text"
              placeholder="Search"
              id="search-val"
            />
          </p>
          <p className="control">
            <button
              className="button is-large is-danger is-rounded"
              onClick={() => props.searchSubmit()}
              type="button">

              <span className="icon is-med is-left">
                <i className="fas fa-search"></i>
              </span>
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Search; 