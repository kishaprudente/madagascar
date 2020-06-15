import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Reply from './pages/Reply';
import Moodboard from './pages/Moodboard';
import Inbox from './pages/Inbox';

import Landing from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';

import BottomNav from './components/BottomNav';
import PrivateRoute from './utils/PrivateRoute';

function App() {
  const user = localStorage.getItem('user');

  return (
    <div data-testid='app'>
      <Router>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <PrivateRoute exact path='/moodboard' component={Moodboard} />
          <PrivateRoute exact path='/reply' component={Reply} />
          <PrivateRoute exact path='/inbox' component={Inbox} />
        </Switch>
        {user ? <BottomNav /> : null}
      </Router>
    </div>
  );
}

export default App;
