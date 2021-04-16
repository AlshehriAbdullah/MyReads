import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import propTypes from 'prop-types'
import Book from './Book'



class BooksList extends Component {
  static propTypes = {
    books: propTypes.array.isRequired,
    updateBooks: propTypes.func.isRequired
  }

  render() {

    const {books, updateBooks, } = this.props

    // const shelves = [
    //   {
    //     title: 'Currently Reading',
    //     id: 'currentlyReading'
    //   },
    //   {
    //     title: 'Want To Read',
    //     id: 'wantToRead'
    //   },
    //   {
    //     title: 'Read',
    //     id: 'read'
    //   }
    // ];

    const currentlyReading = books.filter(booksFilter => {
      return booksFilter.shelf === "currentlyReading"
    })
    const wantToRead = books.filter(booksFilter => {
      return booksFilter.shelf === "wantToRead"
    })
    const read = books.filter(booksFilter => {
      return booksFilter.shelf === "read"
    })

    return (
      <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {currentlyReading.map((book) => (
                        // <Book book={book}/> 
                        <Book key={book.id} book={book} books={books} updateBooks={updateBooks}/> 
                
                      ))}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {wantToRead.map((book) => (
                        // <Book book={book}/> 
                        <Book key={book.id} book={book} books={books} updateBooks={updateBooks}/> 
                
                      ))}
                      
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {read.map((book) => (
                        // <Book book={book}/> 
                        <Book key={book.id} book={book} books={books} updateBooks={updateBooks}/> 
                
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
              <Link className="open-search"
              to='/Search'>
                <button>Add a book</button>
              </Link>
          </div>
    )
  }
}

export default BooksList