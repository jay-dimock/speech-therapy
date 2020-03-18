import React from 'react';
import {CssBaseline} from '@material-ui/core'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {green} from '@material-ui/core/colors'
import './App.css';

const theme = createMuiTheme({ 
  palette: { 
    type: 'dark', 
    primary: green,
  } 
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <p>Hello</p>
      </ThemeProvider>      
    </div>
  );
}
export default App;
