import React, {useState} from 'react';
import './App.css';
import MyContext from './context/MyContext'
import { Router } from '@reach/router'
import {CssBaseline} from '@material-ui/core'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {green} from '@material-ui/core/colors';
import Main from './views/Main';
import Register from './views/Register';
import Login from './views/Login';


const theme = createMuiTheme({ 
  palette: { 
    type: 'dark', 
    primary: green,
  } 
});

function App() {
  const [user, setUser] = useState({firstName:"", lastName: "", id: ""});

  return (
    <div className="App">
      <MyContext.Provider value={{user, setUser}}>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <Router>
              <Main default path="/"/>
              <Register path="register"/>
              <Login path="login"/>
          </Router>
        </ThemeProvider>
      </MyContext.Provider>
    </div>
  );
}
export default App;
