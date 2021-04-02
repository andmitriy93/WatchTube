import React from "react";

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
    };
    this.thumbsUp = this.thumbsUp.bind(this);
  }

  componentDidMount() {
    // this.props.fetchComments(this.props.currentUser);
    this.props.fetchComments();
  }

  // componentDidUpdate(prevProps) {
  //   // Typical usage (don't forget to compare props):
  //   if (this.props.userID !== prevProps.userID) {
  //     this.fetchData(this.props.userID);
  //   }
  // }

  thumbsUp(e) {
    // debugger
    // if (this.state.liked === false) {
      this.props.createLike(parseInt(e.currentTarget.value));
      this.setState({ liked: !this.state.liked });
      console.log(this.state.liked)
      // }
    // } else {
    //   this.props.dislike(
    //     parseInt(e.target.value),
    //     this.props.comment[e.target.value].likes[0]
    //   );
    //   this.setState({ liked: false });
    // }
  }

  thumbsDown(e) {
    this.props.dislike(parseInt(e.currentTarget.value), this.props.comment[e.currentTarget.value].likes[0]);
    this.setState({ liked: !this.state.liked });
    console.log(this.state.liked)
  }
  // comments[comment.id]

  render() {
    if (!this.props.comments) return null;
    const { comments } = this.props;

    comments.reverse();
    const filteredComments = comments.map((comment) => {
      if (comment.video_id === parseInt(this.props.videoId)) {
        return (
          <div key={comment.id}>
            <div className='comments-index-video-show' key={comment.id}>
              <div className='comments-index-author'>
                {comment.author.username}
              </div>
              <div className='comments-index-body'>{comment.body}</div>
              <div className="like-comment">
                <button onClick={this.thumbsUp} value={comment.id}>
                  <i className="fas fa-thumbs-up"></i>
                </button>
                <span className="like-comment-amount">{comment.likes.length}</span>
              </div>
            </div>
          </div>
        );
      }
    });

    return <div className='comments-index-outter'>{filteredComments}</div>;
  }
}

export default Comments;
