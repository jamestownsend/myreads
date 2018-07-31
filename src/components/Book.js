import React, { Component } from "react";
import PropTypes from 'prop-types';

class Book extends Component {
  static propTypes = {
      selectedBooks: PropTypes.object.isRequired,
      changeShelf: PropTypes.func.isRequired
}

  render() {
    const { selectedBooks } = this.props;

    if(selectedBooks.shelf === undefined) {
        selectedBooks.shelf = 'none';
    }

    if(selectedBooks.imageLinks === undefined ) {
        selectedBooks.imageLinks = ['thumbnail'];
        selectedBooks.imageLinks.thumbnail = 'https://library.britishcouncil.org.in/static-content/isbn/noimage.jpg';
    }

    return (
      <div className="bookshelf-books">
        <ol className="books-grid">{selectedBooks.length > 0 &&selectedBooks.map(selectedBook => (
              <li key={selectedBook.id}>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193}}>
                        <img alt="" src={selectedBook.imageLinks.thumbnail} style={{ width: 128, height: 193 }}/>
                    </div>
                    <div className="book-shelf-changer">
                      <select
                        name="shelf"
                        onChange={e => this.props.changeShelf(e, selectedBook)}
                        value={selectedBook.shelf}
                      >
                        <option value="none" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{selectedBook.title}</div>
                  <div className="book-authors">
                    {selectedBook.authors
                      ? selectedBook.authors.join(", ")
                      : ""}
                  </div>
                </div>
              </li>
            ))}
        </ol>
      </div>
    );
  }
}

export default Book;
