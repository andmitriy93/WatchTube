import React from "react";

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      author_id: this.props.currentUser.username
    }
  }

  componentDidMount() {
    // this.props.fetchComments(this.props.currentUser);
    this.props.fetchComments();
  }

  render() {
    const { comments } = this.props;
    if (!this.props.comments) return null;
      
    const filteredComments = comments.map((comment) => {
      if (comment.video_id === parseInt(this.props.videoId)) {
        return (
          <div key={comment.id}>
            <div className="comments-index-video-show" key={comment.id}>
              {console.log(comment)}
              {comment.body}
              <br/>
              {comment.author_id}
            </div>
          </div>
        )
      }
    })

    return (
      <div className="comments-index-outter">{filteredComments}</div>
    );
  }
}

export default Comments;
