import React from "react";

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // body: '',
      // author_id: this.props.currentUser.username

    }
    this.thumbsUp = this.thumbUp.bind(this)
  }

  componentDidMount() {
    // this.props.fetchComments(this.props.currentUser);
    this.props.fetchComments();

  }

  thumbsUp(e) {
    // debugger
    e.preventDefault();
    this.props.createLike(parseInt(e.target.value))
    // console.log(this.props.likes)
  }


  render() {
    if (!this.props.comments) return null;
    const { comments } = this.props;

    comments.reverse()
    const filteredComments = comments.map((comment) => {
      if (comment.video_id === parseInt(this.props.videoId)) {
        return (
          <div key={comment.id}>
            <div className="comments-index-video-show" key={comment.id}>
              <div className="comments-index-author">{comment.author.username}</div>
              <div className="comments-index-body">
                {comment.body}
              </div>
              <button onClick={this.thumbsUp} value={comment.id}><i className="far fa-thumbs-up"></i>Like</button>
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
