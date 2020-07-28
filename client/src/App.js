import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthContext } from './utils/authContext';

import Reply from './pages/Reply';
import Moodboard from './pages/Moodboard';
import Inbox from './pages/Inbox';
import Landing from './pages/Landing';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const existingTokens = JSON.parse(localStorage.getItem('tokens'));
  const existingUser = JSON.parse(localStorage.getItem('user'));
  const [currentUser, setCurrentUser] = useState(existingUser);
  const [authTokens, setAuthTokens] = useState(existingTokens);

  const setTokens = (data) => {
    localStorage.setItem('tokens', JSON.stringify(data));
    setAuthTokens(data);
  };

  const setCurrentUserData = (data) => {
    localStorage.setItem('user', JSON.stringify(data));
    setCurrentUser(data);
  };

  return (
    <div data-testid='app' style={container}>
      <AuthContext.Provider
        value={{
          authTokens,
          currentUser,
          setAuthTokens: setTokens,
          setCurrentUser: setCurrentUserData,
        }}
      >
        <Router>
          <Header />
          <div style={{ marginTop: '50px' }}>
            <Switch>
              <Route exact path='/' component={Landing} />
              <Route exact path='/signin' component={Signin} />
              <Route exact path='/signup' component={Signup} />
              <PrivateRoute path='/moodboard' component={Moodboard} />
              <PrivateRoute path='/reply' component={Reply} />
              <PrivateRoute path='/inbox' component={Inbox} />
            </Switch>
          </div>
          {existingTokens ? <BottomNav /> : null}
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;

const container = {
  backgroundColor: '#A1D1B6',
  width: '100vw',
  height: '100%',
};
