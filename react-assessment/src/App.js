import './App.css';
import { Component } from 'react'
import Header from './Components/Header'
import BookList from './Components/BookList'
import Shelf from './Components/Shelf'
import SearchBar from './Components/SearchBar'
import data from './data';


class App extends Component {
  constructor() {
    super();
    this.state = {
      books: data,
      shelf: [],
    }
    this.addToShelf = this.addToShelf.bind(this)
    this.clearShelf = this.clearShelf.bind(this)
    this.filterBooks = this.filterBooks.bind(this)
    this.reset = this.reset.bind(this)
  }

  addToShelf = (title) => {
    console.log(`${title} added to shelf`)
    this.setState({ shelf: [...this.state.shelf, title] })
    // this.state.shelf.push(title)
  }

  clearShelf = () => {
    console.log('shelf cleared')
    return this.setState({ shelf: [] })
  }

  filterBooks = (input) => {
    let filteredBooks = this.state.books.filter(el => {
      if (el.title.includes(input)) { return el.title.includes(input) }
      else if (el.author.includes(input)) { return el.author.includes(input) }

    });
    this.setState({ books: filteredBooks })
  }

  reset = () => {
    this.setState({ books: data })
  }

  render() {
    return (
      <div className="App" >
        <Header />
        <SearchBar
          filterBooks={this.filterBooks}
          reset={this.reset} />
        <section
          className="main_content">
          <BookList
            books={this.state.books}
            addToShelf={this.addToShelf}
            shelf={this.state.shelf} />
          <Shelf
            shelf={this.state.shelf}
            clearShelf={this.clearShelf} />
        </section>
      </div>
    );
  }
}
export default App;
