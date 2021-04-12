import React from "react";

class Comments extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: this.props.comments,
    };

    this.thumbsUp = this.thumbsUp.bind(this);
    this.thumbsDown = this.thumbsDown.bind(this);
  }

  componentDidMount() {
    this.props.fetchComments().then((res) => {
      // debugger
      this.setState({ comments: Object.values(res.comments) });
    });
    this.props.fetchLikes();
  }

  // componentDidUpdate(prevProps, prevState) {
  //   for (let i = 0; i < prevProps.comments.length; i++) {
  //     let oldComment = prevProps.comments[i];
  //     let newComment = this.props.comments[i];
  //     // console.log(oldComment);
  //     // console.log(newComment);

  //     if (oldComment.likesCount !== newComment.likesCount) {
  //       // debugger
  //       this.setState({ comments: this.props.comments });
  //       break;
  //     }
  //   }
  // }

  thumbsUp(e) {
    // debugger;
    e.preventDefault();
    this.props.likeComment(parseInt(e.currentTarget.value));
  }

  thumbsDown(e) {
    // debugger;
    e.preventDefault();
    let currentUser = this.props.currentUser.id;
    let commentId = parseInt(e.currentTarget.value);
    const likeId = this.props.likes.map((like) => {
      if (like.comment_id === commentId && like.user_id === currentUser) {
        return this.props.unLikeComment(like.id);
      }
    });
  }

  render() {
    if (!this.props.comments) return null;
    if (!this.props.likes) return null;
    const { comments } = this.state;
    console.log(comments);

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
                {comment.liked_by_current_user ? (
                  <button onClick={this.thumbsDown} value={comment.id}>
                    <i className='fas fa-thumbs-up'></i>
                  </button>
                ) : (
                  <button onClick={this.thumbsUp} value={comment.id}>
                    <i className='fas fa-thumbs-up'></i>
                  </button>
                )}

                <span className='like-comment-amount'>
                  {comment.likesCount}
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
