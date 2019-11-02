import React, { Component } from "react";
import axios from "axios";

class AddComment extends Component {
  constructor(props) {
    super(props);
    this.state = { comment: "", owner: "" };
  }

  handleFormSubmit = event => {
    console.log(event);
    
  };

  render() {
    return (
      <div>
        <textarea onChange={this.handleFormSubmit} name="comment" value={this.state.comment} />
      </div>
    );
  }
}

export default AddComment;
