import React, { Component } from "react"
import PropType from 'prop-types'


class Book extends Component {
  static PropType = {
    books: PropType.array.isRequired,
    updateBooks: PropType.func.isRequired,
  }

  handleChange(event) { 
    const {updateBooks, book}= this.props
   updateBooks (book, event.target.value)
   
  }

  render() {
    const {books, book } = this.props
    this.handleChange = this.handleChange.bind(this);
    
    let shelf = "none"
    
    books.map(b => {
      if (b.id === book.id){
        shelf = b.shelf
      }
    })
    // console.log(book);

    return (
        <li>
            <div className="book">
                <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url('${book.imageLinks.smallThumbnail}')` }}></div>
                <div className="book-shelf-changer">
                    <select value={shelf} onChange={this.handleChange}>
                      <option value="move" disabled>Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
            </div>
            </li>
    )
  }
}
export default Book;
