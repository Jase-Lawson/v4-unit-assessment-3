import { Component } from 'react'

class Shelf extends Component {
  render() {
    return (
      <div className="shelf_style">
        <h3>Your Shelf</h3>
        <button onClick={this.props.clearShelf} style={{ cursor: 'pointer' }} >clear shelf</button>
        <div>
          {this.props.shelf.map((el, i) => { return <ul id={i}> {el} </ul> })}
          {console.log(this.props.shelf)}
        </div>
      </div>
    )
  }

}
export default Shelf;