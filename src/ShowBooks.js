import React, { Component } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";

class ShowBooks extends Component {
  state = {};

  render() {
    // const { books } = this.props,
    //
    // currentlyReading = books.filter(book => books.shelf === "currentlyReading"),
    // read = books.filter(book => book.shelf === "read"),
    // wantToRead = books.filter(book => book.shelf === "wantToRead");

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

export default ShowBooks;
