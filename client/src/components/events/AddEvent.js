import React, { Component } from "react";
import axios from "axios";

class AddShenanigan extends Component {
  constructor(props) {
    super(props);
    this.state = { eventName: "", description: "", category: "", location: ""}; // MISSING date: "", image: "" 
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const eventName = this.state.eventName;
    const description = this.state.description;
    const category = this.state.category;
    const location = this.state.location

    axios
      .post("http://localhost:5000/api/events", { eventName, description, category, location })
      .then(() => {
        this.props.getData(); 
        this.setState({ eventName: "", description: "", category: "", location: ""});
      })
      .catch(error => console.log(error));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Event</label>
          <input
            type="text"
            name="eventName"
            value={this.state.eventName}
            onChange={e => this.handleChange(e)}
          />
          <label>Description:</label>
          <textarea
            name="description"
            value={this.state.description}
            onChange={e => this.handleChange(e)}
          />
           <label>Category</label>
          <input
            type="text"
            name="category"
            value={this.state.category}
            onChange={e => this.handleChange(e)}
          />
             <label>Location</label>
          <input
            type="text"
            name="location"
            value={this.state.location}
            onChange={e => this.handleChange(e)}
          />
          

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddShenanigan;
