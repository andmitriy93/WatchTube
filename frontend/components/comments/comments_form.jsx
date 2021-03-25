import React from "react";

class CommentsForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: "",
      // author_id: this.props.author_id,
      // video_id: this.props.videoId,
    };
  }

  render() {
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

export default CommentsForm;
