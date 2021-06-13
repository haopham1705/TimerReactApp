import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";

import HomePage from "./components/HomePage/index";
import LoginPage from "./components/LoginPage/index";
import PrivateRouter from "./components/Router/PrivateRouter";
import AuthRouter from "./components/Router/AuthRouter";
import PageNotFound from "./components/PageNotFound";

function App(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    setUsername(localStorage.getItem("username"));
    setPassword(localStorage.getItem("password"));
  };

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    setUsername(localStorage.getItem("username"));
    setPassword(localStorage.getItem("password"));
  };

  return (
    <Router>
      <Switch>
        <PrivateRouter
          exact
          path="/"
          component={HomePage}
          onLogOut={handleLogout}
        />
        <AuthRouter path="/login" component={LoginPage} onLogin={handleLogin} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
