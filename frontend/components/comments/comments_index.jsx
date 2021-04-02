import React from "react";

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      // commentLikes: null
    };
    this.thumbsUp = this.thumbsUp.bind(this);
    this.thumbsDown = this.thumbsDown.bind(this);
  }

  componentDidMount() {
    this.props.fetchComments();
  }

  thumbsUp(e) {
    // debugger;
    e.preventDefault();
    this.props.createLike(parseInt(e.currentTarget.value));
    // console.log(comment.id)
    this.setState({
      liked: !this.state.liked,
      // commentLikes: this.props.comments[parseInt(e.currentTarget.value)].likes.length,
    });
    // this.setState({ commentLikes: this.props.comments[parseInt(e.currentTarget.value)].likes.length})
    // console.log(this.props.fetchComment(comment.id))
    // console.log(this.props.comments.id)
  }

  thumbsDown(e) {
    // debugger;
    e.preventDefault()
    this.props.dislike(
      parseInt(e.currentTarget.value),
      this.props.comment[e.currentTarget.value].likes[0]
    );
    this.setState({ liked: !this.state.liked });
    // console.log(this.props.comment[e.currentTarget.value].likes[0])
  }

  render() {
    if (!this.props.comments) return null;
    const { comments } = this.props;
    const { liked } = this.state;

    // comments.reverse();
    const filteredComments = comments.map((comment) => {
      if (comment.video_id === parseInt(this.props.videoId)) {
        return (
          <div key={comment.id}>
            <div className='comments-index-video-show' key={comment.id}>
              <div className='comments-index-author'>
                {comment.author.username}
              </div>
              <div className='comments-index-body'>{comment.body}</div>
              <div className='like-comment'>
                {liked === false ? (
                  <button onClick={this.thumbsUp} value={comment.id}>
                    <i className='fas fa-thumbs-up'></i>
                  </button>
                ) : (
                  <button onClick={this.thumbsDown} value={comment.id}>
                    <i className='fas fa-thumbs-up'></i>
                  </button>
                )}

                <span className='like-comment-amount'>
                  {comment.likes.length}
                </span>
              </div>
            </div>
          </div>
        );
      }
    });

    // debugger
    return <div className='comments-index-outter'>{filteredComments}</div>;
  }
}

export default Comments;
