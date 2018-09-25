import React, { Component } from "react";

class Form extends Component {
  // Setting the initial values of this.state.username and this.state.password
  state = {
    username: "",
    password: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (!this.state.username || !this.state.password) {
      alert("Fill out your username and password please!");
    } else if (this.state.password.length < 6) {
      alert(
        `Choose a more secure password ${this.state.firstName} ${this.state
          .lastName}`
      );
    } else {
      alert(`Hello ${this.state.username}. Your password is ${this.state.password}`);
    }

    this.setState({
      username: "",
      password: ""
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <form>
            <div className="form-group">
              <p>Username: {this.state.username}</p>
              <p>Password: {this.state.password}</p>
              <input
                className="form-control"
                value={this.state.username}
                name="username"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Username"
              />
              <input
                className="form-control"
                value={this.state.password}
                name="password"
                onChange={this.handleInputChange}
                type="password"
                placeholder="Password"
              />
              <button className="btn btn-primary" onClick={this.handleFormSubmit}>Submit</button>
            </div>

          </form>
        </div>

      </div>

    );
  }
}

export default Form;
