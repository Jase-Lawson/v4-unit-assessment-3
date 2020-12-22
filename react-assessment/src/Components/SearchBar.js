import { Component } from 'react'

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      userInput: ''
    }
  }

  handleChange = (input) => {
    this.setState({ userInput: input })
  }

  handleClick = () => {
    console.log('search button clicked')
    console.log(` userInput is ${this.state.userInput}`)
    this.props.filterBooks(this.state.userInput)
  }

  handleClear = () => {
    this.setState({ userInput: '' })
    this.props.reset()
  }

  render() {
    return (
      <div>
        <section className="search_bar">
          <input
            id="input"
            onChange={e => this.handleChange(e.target.value)}
            value={this.state.userInput} ></input>
          <button
            id="search"
            onClick={this.handleClick}
            style={{ cursor: 'pointer' }}> search </button>
          <button
            id="clear"
            onClick={this.handleClear}
            style={{ cursor: 'pointer' }}> clear search </button>
        </section>
      </div >
    )
  }
}

export default SearchBar