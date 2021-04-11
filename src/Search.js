import React, { Component } from "react";
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'



class Search extends Component {
    state ={
        query:'',
        newBooks:[]
    }

    handleChange = (query) => {
        this.setState(() => ({
            // query: query.trim()
            query: query
        }))
        this.getNewBook()
      }

      clearQuery = () => {
        this.handleChange('')
    }

    getNewBook = event => {
      BooksAPI.search(this.state.query).then(response => {
        console.log(response);
        
        if (response !== undefined && this.state.query !== "" && !response.hasOwnProperty('error')) {
          this.setState({
            newBooks:response
          })
        }
        else {this.setState({
          newBooks:[]
        })}
      })
    }


  render() {
    const {query, newBooks} = this.state
    const {books, updateBooks,  } = this.props
    
    
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" 
          to='/'>
          Close
          </Link>

          <div className="search-books-input-wrapper ">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input type="query" 
            placeholder="Search by title or author"
            value={query}
            onChange={(event) => this.handleChange(event.target.value)} />
          </div>
        </div>
        <div className="search-books-results" >
          
          <ol className="books-grid" >
            {newBooks.map((book) => (
              <Book key={book.id} book={book} books={books} updateBooks={updateBooks} /> 
              
              ))} 
          </ol>
        </div>
      </div>
    );
  }
}
export default Search;
