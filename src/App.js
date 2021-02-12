import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  HashRouter as Routerr,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';

function App() {
  return (
    <Routerr hashType='noslash'>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/users">
            <Users />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>

          <Route component = { NotFound }/>
        </Switch>
      </div>
    </Routerr>
  );
}

function NotFound() {
  return <h2>No found</h2>;
}

function Home() {
  let currenturl = window.location.href.toString();

  console.log(currenturl.substring(0, (parseInt(currenturl.length) -1)));
  
  console.log(window.location.href);
  // window.history.pushState("", "", "/");
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
