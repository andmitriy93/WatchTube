import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search: '',
      videos: '',
      filtered: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }


  handleChange(e) {
    this.setState({
      search: e.currentTarget.value
    })
  }


  handleClick(e) {
    e.preventDefault();
    this.props.searchVideos(this.state.search.replace(/^\w/, (c) => c.toUpperCase()))
  }

  render() {

    return (
        <div className="search-btn">
          <form className="search-bar-form">
            <label>
              <span className="visually-hidden"></span>
            </label>
            <input
              type="text"
              className="search-input"
              placeholder="Search"
              onChange={this.handleChange}
              value={this.state.search}
            />
            <button onClick={this.handleClick} className="search-bar-btn" type="submit">
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>
        )
  }

}

export default SearchBar;
