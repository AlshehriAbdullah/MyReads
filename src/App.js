import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import { Route } from "react-router-dom";
import BooksList from "./BooksList";
import Search from "./Search";

class BooksApp extends React.Component {
  state = {
    books: [],
  };

  async componentDidMount() {
    const books = await BooksAPI.getAll();
    this.setState({ books });
  }

  updateBooks = (book, shelf) => {
    BooksAPI.update(book, shelf).then((e) => {
      this.newBook();
    });
  };

  newBook = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({
        books,
      });
    });
  };

  render() {
    return (
      <div className="app">
        <Route exact path="/">
          <BooksList books={this.state.books} updateBooks={this.updateBooks} />
        </Route>

        <Route path="/Search">
          <Search books={this.state.books} updateBooks={this.updateBooks} />
        </Route>
      </div>
    );
  }
}

export default BooksApp;
