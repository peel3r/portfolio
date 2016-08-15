import React, {Component} from 'react'
import sty from './style.scss'
class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      term: ''
    }
  }
    render() {
      return (
        <div className={sty.containerbar}>
          <input
          value={this.state.term}
          onChange={event => this.setState({term: this.target.value})}
          />
        </div>

      )
    }
}
export default SearchBar
