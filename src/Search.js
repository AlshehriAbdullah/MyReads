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
            query: query
        }))
        BooksAPI.search(query).then(response => {
          console.log("res",response);
          
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

      clearQuery = () => {
        this.handleChange('')
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

          <div className="search-books-input-wrapper ">ß
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
