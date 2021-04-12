import React from "react";

class Comments extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: this.props.comments
    }

    this.thumbsUp = this.thumbsUp.bind(this);
    this.thumbsDown = this.thumbsDown.bind(this);
  }

  componentDidMount() {
    this.props.fetchComments();
    this.props.fetchLikes();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.comments !== this.state.comments) {
      
    }
  }

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
    // let liked_by_current_user = this.props.comments[parseInt(e.currentTarget.value)].liked_by_current_user
    const likeId = this.props.likes.map((like) => {
      // debugger
      if (like.comment_id === commentId && like.user_id === currentUser) {
        // debugger
        return this.props.unLikeComment(like.id);
        // return like.id
      }
    })
  }

  render() {
    if (!this.props.comments) return null;
    if (!this.props.likes) return null;
    const { comments } = this.props;

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
