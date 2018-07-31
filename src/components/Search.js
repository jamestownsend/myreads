import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Debounce } from 'react-throttle';
import * as BooksAPI from "../BooksAPI";
import Book from "./Book";

class SearchBooks extends Component {
  state = {
    search: "",
    searchedBooks: []
  };

  createShelf(result) {
    let hasShelf = this.props.books.filter(book => book.id === result.id);
    return hasShelf.length ? hasShelf[0].shelf : "none";
  }

  clearQuery = () => {
      this.setState({
          query: '',
          booksQuery: []
      })
  }

  searchBooks = search => {
    let searchedBooks = [];

    if(search === "") {
      this.setState({
        searchedBooks: []
      })

    } else {

      let searchResults = [];

      BooksAPI.search(search, 20).then(results => {
        if (results && results.length) {

          searchResults = results.map(result => {
            result.shelf = this.createShelf(result);
            return result;
          });

          this.setState({
            searchedBooks: searchResults
          });

        } else {
          this.setState({
            searchedBooks: []
          });
        }
      });
    }
    this.setState({
      search: search.trim()
    });
  };


  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/"
          onClick={this.closeQuery}
          >Close</Link>
          <div className="search-books-input-wrapper">
            <Debounce time="250" handler="onChange">
            <input
              onChange={event => this.searchBooks(event.target.value)}
              placeholder="Search by title or author"
              type="text"
            />
            </Debounce>
          </div>
        </div>
        <div className="search-books-results">
          {this.state.searchedBooks.length == 0 &&
          <span className="no-results">No Results</span>}
          {this.state.searchedBooks.length > 0 &&
            <Book
              selectedBooks={this.state.searchedBooks}
              changeShelf={this.props.changeShelf}
            />}
        </div>
      </div>
    );
  }
}

export default SearchBooks;
