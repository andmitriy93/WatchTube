import React from "react";
import CommentsFormContainer from './comments_form_container'

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',

      // author_id: this.props.currentUser.id
    }
  }

  componentDidMount() {
    // this.props.fetchComments(this.props.currentUser);
    this.props.fetchComments();
  }

  render() {
    const { comments } = this.props;
    // console.log(comments)
    if (!this.props.comments) return null;
      
    const filteredComments = comments.map((comment) => {
      if (comment.video_id === parseInt(this.props.videoId)) {
        return (
          <div key={comment.id}>
            {comment.body}
            <div>hello</div>
          </div>
        )
      }
    })

    return (
      <div>{filteredComments}</div>
    );
  }
}

export default Comments;
