import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
  state = {
    username: "josephrios",
    password: "pass"
  };

  handleChanges = e => {
    const { value, id } = e.target;
    this.setState({
      [id]: value
    });
  };

  onSubmit = async e => {
    e.preventDefault();

    const endpoint = "http://localhost:5000/api/auth/login";
    try {
      const res = await axios.post(endpoint, this.state);
      localStorage.setItem("jwt", res.data.token);
      this.props.history.push("/users");
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <>
        <h1>login form</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label htmlFor="username">
              <input
                type="text"
                name="username"
                id="username"
                onChange={this.handleChanges}
                value={this.state.username}
              />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              <input
                type="password"
                name="password"
                id="password"
                onChange={this.handleChanges}
                value={this.state.password}
              />
            </label>
          </div>
          <div>
            <button type="submit">login</button>
          </div>
        </form>
      </>
    );
  }
}

export default Login;
