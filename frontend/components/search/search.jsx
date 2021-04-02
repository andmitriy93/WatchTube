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
      filtered: []
    }
  }

  componentDidMount() {
    this.setState({
      filtered: this.props.videos
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      filtered: nextProps.videos
    })
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
            />
            <button className="search-bar-btn" type="submit">
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>
        )
  }

}

export default SearchBar;
