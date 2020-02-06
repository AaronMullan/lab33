import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Header from '../components/header/Header';
import Container from '../containers/Container';
import Detail from '../components/details/Detail';

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/details/:id" component={Detail} />
          <Route exact path="/" component={Container} />
        </Switch>
      </Router>
    </>
  );
}
