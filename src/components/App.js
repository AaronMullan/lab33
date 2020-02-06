import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Link
} from 'react-router-dom';
import Header from '../components/header/Header';
import Container from '../containers/Container';
import DetailContainer from '../containers/DetailContainer';

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={Container} />
          <Route path="/details" component={DetailContainer} />
        </Switch>
      </Router>
    </>
  );
}
