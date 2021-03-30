import React from "react";

const SearchBar = () => (
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
);


// class SearchBar extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       darkTheme: this.props.darkTheme,
//       search: 'search-bar-btn'
//     }
//   }

//   switchTheme(e) {
//     e.preventDefault();
//     if (this.state.darkTheme === false) {
//       this.setState({
//         darkTheme: !this.state.darkTheme,
//         search: 'search-bar-btn.dark',
//       })
//     }else {
//       this.setState({
//         darkTheme: !this.state.darkTheme,
//         search: 'search-bar-btn',
//       })
//     }
//   } 

//   render() {
//     return (
//         <div className="search-btn">
//           <form className="search-bar-form">
//             <label>
//               <span className="visually-hidden"></span>
//             </label>
//             <input
//               type="text"
//               className="search-input"
//               placeholder="Search"
//             />
//             <button className={this.state.search} type="submit">
//               <i className="fas fa-search"></i>
//             </button>
//           </form>
//         </div>
//         )
//   }

// }

export default SearchBar;
