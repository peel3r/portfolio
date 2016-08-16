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
          onChange={event => this.onInputChange(event.target.value)}
          />
        </div>

      )
    }

    onInputChange(term) {
      this.setState({term})
      this.props.onSearchTermChange(term)
    }
}
export default SearchBar
