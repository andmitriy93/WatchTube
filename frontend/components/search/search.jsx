import React from "react";

// const SearchBar = () => (
//   <div className="search-btn">
//     <form className="search-bar-form">
//       <label>
//         <span className="visually-hidden"></span>
//       </label>
//       <input
//         type="text"
//         className="search-input"
//         placeholder="Search"
//       />
//       <button className="search-bar-btn" type="submit">
//         <i className="fas fa-search"></i>
//       </button>
//     </form>
//   </div>
// );


class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search: '',
      videos: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      search: e.currentTarget.value
    })
  }

  handleClick(e) {
    e.preventDefault();
    this.props.searchVideos(this.state.search)
    console.log(this.props.videos)
  }

  render() {

    return (
        <div className="search-btn">
          {console.log(this.state.videos)}
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
