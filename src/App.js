import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Users from './containers/Users';
import Albums from './containers/Albums';
import Gallery from './containers/Gallery';

export default function App() {
  return (
      <Router>
          <Switch>
            <Route exact path="/">
              <Users />
            </Route>
            <Route path="/albums">
              <Albums />
            </Route>
            <Route path="/gallery">
              <Gallery />
            </Route>
          </Switch>
      </Router>
  );
}
