import React, { Component } from "react";
import axios from "axios";

class Users extends Component {
  state = {
    users: []
  };

  async componentDidMount() {
    const endpoint = "http://localhost:5000/api/users";
    const token = localStorage.getItem("jwt");
    const reqOptions = {
      headers: {
        authorization: token
      }
    };
    const res = await axios.get(endpoint, reqOptions);
    this.setState({
      users: res.data
    });
  }
  render() {
    return (
      <>
        <h2>list of users</h2>
        <ul>
          {this.state.users.map(user => (
            <li key={user.id}>{user.username}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default Users;
