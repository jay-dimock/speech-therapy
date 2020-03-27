import { createMuiTheme } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal' 
//import green from '@material-ui/core/colors/green';//-good
//import orange from '@material-ui/core/colors/orange';
//import cyan from '@material-ui/core/colors/cyan' //good for dark
// OK for light: import indigo from '@material-ui/core/colors/indigo';
// OK for dark: import amber from '@material-ui/core/colors/amber'
// NO : import deepOrange from '@material-ui/core/colors/deepOrange';  
// NO : import blue from '@material-ui/core/colors/blue';
// NO : import lime from '@material-ui/core/colors/lime'
// NO: import blueGrey from '@material-ui/core/colors/blueGrey'

export const getTheme = (darkOrLight) => {
    if (!darkOrLight) darkOrLight = "dark";

    //const shade = (darkOrLight === "dark") ? 300 : 800;
    
    const theme = createMuiTheme({ 
        palette: { 
            type: darkOrLight, 
            primary: teal,
        } 
    });

    return theme;
}

