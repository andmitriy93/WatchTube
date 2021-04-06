import React from "react";

class Comments extends React.Component {
  constructor(props) {
    super(props);

    this.thumbsUp = this.thumbsUp.bind(this);
    this.thumbsDown = this.thumbsDown.bind(this);
  }

  componentDidMount() {
    this.props.fetchComments();
  }

  thumbsUp(e) {
    // debugger;
    e.preventDefault();
    this.props.likeComment(parseInt(e.currentTarget.value));
  }

  thumbsDown(e) {
    // debugger;
    e.preventDefault();
    // this.props.unLikeComment(parseInt(e.currentTarget.value));
    let likeId;
    // this.props.comments.forEach((comment) => {
    //   if (comment.id === parseInt(e.currentTarget.value)) {
    //     likeId = comment.current_user_like_id;
    //   }
    // })
    this.props.unLikeComment(likeId);
  }

  render() {
    if (!this.props.comments) return null;
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
                  {comment.likes}
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
