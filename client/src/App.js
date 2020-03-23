import React, {useState, useEffect} from 'react';
import './App.css';

import SessionContext from './util/SessionContext'
import {getSessionCookie, setSessionCookie} from './util/SessionCookie';

import { Router } from '@reach/router'
import {CssBaseline} from '@material-ui/core'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {green} from '@material-ui/core/colors';

import Main from './views/Main';
import Register from './views/Register';
import Login from './views/Login';
import Logout from './views/Logout';
import Exercise from './views/Exercise';

const theme = createMuiTheme({ 
  palette: { 
    type: 'dark', 
    primary: green,
  } 
});

function App() {
  const [session, setSession] = useState(getSessionCookie());

  useEffect(() => {
    console.log("persisting session via useEffect")
    setSessionCookie(session);
  }, [session])

  return (
    <div className="App">
      <SessionContext.Provider value={{session, setSession}}>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <Router>
              <Main default path="/"/>
              <Register path="register"/>
              <Login path="login"/>
              <Logout path="logout"/>
              <Exercise path="exercise"/>
          </Router>
        </ThemeProvider>
      </SessionContext.Provider>
    </div>
  );
}
export default App;
