import React from "react";
import { NavLink, Route } from "react-router-dom";
import "./App.css";

import Login from "./routes/login/Login";
import Users from "./routes/users/Users";

function App() {
  return (
    <>
      <nav>
        <NavLink to="/login">login</NavLink>
        <NavLink to="/users">users</NavLink>
      </nav>
      <main>
        <Route path="/login" component={Login} />
        <Route path="/users" component={Users} />
      </main>
    </>
  );
}

export default App;
