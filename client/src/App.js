import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Reply from './pages/Reply';
import Dashboard from './pages/Dashboard';
import Inbox from './pages/Inbox';

import Landing from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';

import BottomNav from './components/BottomNav';

function App() {
  const loggedIn = false;

  return (
    <div data-testid="app">
      <Router>
        <Switch>
          {loggedIn ? (
            <React.Fragment>
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/reply" component={Reply} />
              <Route exact path="/inbox" component={Inbox} />
              <BottomNav style={styles.bottom} />
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Route exact path="/" component={Landing} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
            </React.Fragment>
          )}
        </Switch>
      </Router>
    </div>
  );
}

const styles = {
  bottom: {
    position: 'fixed',
    bottom: 0,
  },
};

export default App;
