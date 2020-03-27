import React, {useState, useEffect} from 'react';
import './App.css';

import SessionContext from './util/SessionContext';
import {getSessionCookie, setSessionCookie} from './util/SessionCookie';

import { Router } from '@reach/router';
import {CssBaseline} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import getTheme from './util/Theme';
import Main from './views/Main';
import Register from './views/Register';
import Login from './views/Login';
import Logout from './views/Logout';
import Exercise from './views/Exercise';
import StartExercise from './views/StartExercise';
import EditExercise from './views/EditExercise';
import Reports from './views/Reports';
//import OldBrowser from './views/OldBrowser';

function App() {
  const [session, setSession] = useState(getSessionCookie());

  useEffect(() => {
    console.log("persisting session via useEffect")
    setSessionCookie(session);
  }, [session])

  const theme = getTheme(session.theme);

  return (
    <div className="App">
      <SessionContext.Provider value={{session, setSession}}>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <Router>
              <Main default path="/" />
              <Register path="register"/>
              <Login path="login" />
              <Logout path="logout" />
              <Exercise path="exercise/:param" />
              <StartExercise path="startexercise" />
              <EditExercise path="editexercise/:id" />              
              <Reports path="reports/:report/:param" />  
              <Reports path="reports" />  
              {/* <OldBrowser path="oldbrowser" /> */}
          </Router>
        </ThemeProvider>
      </SessionContext.Provider>
    </div>
  );
}
export default App;
