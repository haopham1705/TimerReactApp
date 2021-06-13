import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory, useLocation } from 'react-router-dom';
import NotFound from '../../components/NotFound';
import CountdownTimer from '../../features/CountdownTimer';
import StopWatch from '../../features/StopWatch';
import LogControl from '../../components/LogControl';
import './HomePage.scss';

export default function HomePage(props) {
  // const match = useRouteMatch()
  const { onLogOut } = props;
  
  return (
    <div className="wrapper homepage_content">
      <div className="container">
        <LogControl onLogOut={onLogOut} />

        <ul className="navbar">
          <Link to="/countdown">
            <li className="navbar__item">
              <h1 className="navbar__item-text">Countdown</h1>
            </li>
          </Link>
          <Link to="/stopwatch">
            <li className="navbar__item">
              <h1 className="navbar__item-text">Stop Watch</h1>
            </li>
          </Link>
        </ul>
      </div>

      <Switch>
        <Route path="/countdown" component={CountdownTimer} exact />
        <Route path="/stopwatch" component={StopWatch} exact />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}
