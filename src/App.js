import React from "react";
import { Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import ShowBooks from "./components/ShowBooks";
import Search from "./components/Search";
import "./App.css";

class BooksApp extends React.Component {
  state = {
    books: [],
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  changeShelf = (e, selectedBook) => {
    const books = this.state.books,
    shelf = e.target.value;
    selectedBook.shelf = e.target.value;
    this.setState({books
    });

    BooksAPI.update(selectedBook, shelf).then(() => {
      this.setState(state => ({
        books: state.books
          .filter(b => b.id !== selectedBook.id)
          .concat([selectedBook])
      }));
    });
  };

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
            <ShowBooks books={this.state.books} changeShelf={this.changeShelf}/>)}/>
        <Route path="/search" render={() => (
            <Search books={this.state.books} changeShelf={this.changeShelf}/>
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
