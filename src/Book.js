import React, { Component } from "react"
import propTypes from 'prop-types'


class Book extends Component {
  static propTypes = {
    books: propTypes.array.isRequired,
    updateBooks: propTypes.func.isRequired,
  }
  handleChange(event) { 
    const {updateBooks, book}= this.props
   updateBooks (book, event.target.value)
   
  }

  render() {
    const {books, book } = this.props
    this.handleChange = this.handleChange.bind(this);
    

    
    let shelfSelecter = "none"
    
    books.map(b => {
      if (b.id === book.id){
        shelfSelecter = b.shelf
      }
    })

      console.log(book);
    const bookTumbnail = "https://storage.googleapis.com/webdesignledger.pub.network/LaT/edd/2016/02/grungy-front-book-cover-3.jpg"
    const thumbnail = book.imageLinks.thumbnail ? book.imageLinks.thumbnail : bookTumbnail
    console.log('thumbnail', thumbnail);

    return (
        <li>
            <div className="book">
                <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(' ${thumbnail}')` }}></div>

                {/* <div className="book-cover" 
                    style={{ width: 128, height: 193, backgroundImage: 'url(' + (book.imageLinks.thumbnail
                    ? book.imageLinks.thumbnail
                    : bookTumbnail) + ')' }}></div> */}


                <div className="book-shelf-changer">
                    <select value={shelfSelecter} onChange={this.handleChange}>
                      <option value="move" disabled>Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors && book.authors.join(', ')}</div>
            </div>
            </li>
    )
  }
}
export default Book;
