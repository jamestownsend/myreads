import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Book from "./Book";

class ShowBooks extends Component {
    static propTypes = {
        Book: PropTypes.object.isRequired,
        changeShelf: PropTypes.func.isRequired
  }

  state = {};

  render() {
    const { books } = this.props,
    currentlyReading = books.filter(book => book.shelf === "currentlyReading"),
    read = books.filter(book => book.shelf === "read"),
    wantToRead = books.filter(book => book.shelf === "wantToRead");

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              {currentlyReading.length > 0 &&
                <Book
                  selectedBooks={currentlyReading}
                  changeShelf={this.props.changeShelf}
                />}
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              {wantToRead.length > 0 &&
                <Book
                  selectedBooks={wantToRead}
                  changeShelf={this.props.changeShelf}
                />}
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              {read.length > 0 &&
                <Book
                  selectedBooks={read}
                  changeShelf={this.props.changeShelf}
                />}
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">
            Add a book
          </Link>
        </div>
      </div>
    );
  }
}

export default ShowBooks;
