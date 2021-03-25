import React from "react";
import CommentsFormContainer from './comments_form_container'

class Comments extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchComments();
  }

  render() {
    if (!this.props.comments) return null;
    return (
      <div></div>

      // <div className="comments-outter">
      //   <form className="comments-form">
      //     <div className="comments-container">
      //       <input type="text" placeholder="Comments" />
      //       <button>Post</button>
      //     </div>
      //   </form>
      // </div>
    );
  }
}

export default Comments;
