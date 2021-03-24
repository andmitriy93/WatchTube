import React from "react";

class CommentsForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      body: '',
      author_id: this.props.author_id,
    }
  }


  render() {
    return;
  }
}

export default CommentsForm;
