import React, { Component } from "react"
import PropType from 'prop-types'


class Book extends Component {
  static PropType = {
    books: PropType.array.isRequired,
    updateBooks: PropType.func.isRequired,
    book : PropType.object.isRequired
  }
  state ={
    selectedValue : ''
  }

  handleChange(event) { 
    const {updateBooks, book}= this.props
    // this.setState ({selectedValue: event.target.value})
   updateBooks (book, event.target.value)
    
  }

  
  

  render() {
    const {books, updateBooks, book } = this.props
    // const {selectedValue} = this.state
    
    let shelf = ""
    
    books.forEach(b => {
      if (b.id === book.id){
        shelf = b.shelf
      }
    })
    
    // console.log(book);
    console.log("1" , updateBooks)
    console.log("2 " , shelf)



    return (
        <li>
            <div className="book">
                <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url('${book.imageLinks.thumbnail}')` }}></div>
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
