import React from "react";

class Comments extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: "",
    };
  }

  componentDidMount() {
    this.props.fetchComments();
  }

  render() {
    if (!this.props.comments) return null;
    return (
      <div className="comments-outter">
        <form className="comments-form">
          <div className="comments-container">
            <input type="text" placeholder="Comments" />
            <button>Post</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Comments;
