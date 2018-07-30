import React, { Component } from "react";
import Book from "./Book";

class ListBooks extends Component {
  render() {
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>

            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <Book/>
            </div>

            <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <Book/>
            </div>

            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <Book/>
            </div>

          </div>
        </div>

        <div className="open-search">
          {/* <Link to="/search">
            Add a book
          </Link> */}
        </div>
      </div>
    );
  }
}

export default ListBooks;
