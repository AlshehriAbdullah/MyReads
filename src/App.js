import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import Book from './Book'
import BooksList from './BooksList'
import Search from './Search'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books:[],
    // showSearchPage: false
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then ((books) => {
      this.setState(() =>({
        books
      }))
    })
  }

  updateBooks = (book, shelf) => {
      BooksAPI.update(book, shelf).then(update => {
        this.getBooks()
      })
  }

  render() {
    console.table(this.state.books);
    return (
      <div className="app">
        <Route exact path='/' >
          <BooksList books={this.state.books} updateBooks={this.updateBooks}/>
        </Route>

        <Route path='/Book' >
          <Book books={this.state.books} updateBooks={this.updateBooks}/>
        </Route>
        
        <Route  path='/Search' >
          <Search books={this.state.books} updateBooks={this.updateBooks}/>
        </Route>
        
      </div>
    )
  }
}

export default BooksApp
