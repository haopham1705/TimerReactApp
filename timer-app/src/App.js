import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
import CountDown from './features/CountdownTimer';
import StopWatch from './features/StopWatch';
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import PrivateRouter from "./components/Router/PrivateRouter";
import AuthRouter from "./components/Router/AuthRouter";
import PageNotFound from "./components/NotFound";

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
        <Route path="/home" component={HomePage} exact />

        <Route path="/countdown" component={CountDown} exact />
        <Route path="/stopwatch" component={StopWatch} exact />
        <Route component={PageNotFound} />

      </Switch>
    </Router>
  );
}

export default App;
