import { Component } from 'react'

class BookList extends Component {

  render() {
    const mappedBooks = this.props.books.map((el) => {
      return (<div className="book_display">
        <img
          src={el.img}
          height="150"
          width="100"
          id="img"
          // onClick={this.handleClick('nice')}
          onClick={() => {
            if (
              !this.props.shelf.includes(el.title)
            ) return this.props.addToShelf(el.title)
          }}
          style={{ cursor: 'grab' }}
        />
        {el.title} by {el.author}
      </div>)
    })

    return (
      <div className="book_list">
        {mappedBooks}
      </div>
    )
  }

}
export default BookList;