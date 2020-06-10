import React from 'react';

import Landing from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Reply from './pages/Reply';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div data-testid="app">
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/reply" component={Reply} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
