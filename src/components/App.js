import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Link
} from 'react-router-dom';
import Container from '../containers/Container';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={Container} />
        </Switch>
      </Router>
    </>
  );
}
