import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthContext } from './utils/authContext';

import Reply from './pages/Reply';
import Moodboard from './pages/Moodboard';
import Inbox from './pages/Inbox';
import Landing from './pages/Landing';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import BottomNav from './components/BottomNav';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const existingTokens = JSON.parse(localStorage.getItem('tokens'));
  const [authTokens, setAuthTokens] = useState(existingTokens);

  const setTokens = (data) => {
    localStorage.setItem('tokens', JSON.stringify(data));
    setAuthTokens(data);
  };

  return (
    <div data-testid='app'>
      <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
        <Router>
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/signin' component={Signin} />
            <Route exact path='/signup' component={Signup} />
            <PrivateRoute path='/moodboard' component={Moodboard} />
            <PrivateRoute path='/reply' component={Reply} />
            <PrivateRoute path='/inbox' component={Inbox} />
          </Switch>
          {existingTokens ? <BottomNav /> : null}
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
