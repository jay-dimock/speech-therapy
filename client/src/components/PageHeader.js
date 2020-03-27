import React, {useContext} from 'react';
import {navigate} from '@reach/router';

import AppBar from '@material-ui/core/AppBar';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';

//import {fontStyle} from '../util/Theme';
import SessionContext from '../util/SessionContext';


const smallStyle = {
    textAlign: "left",
    verticalAlign: "middle",    
    display: "inline-block",
}

const linkStyle = {
    display:"inline-block",
    paddingTop:"10px",
    paddingBottom:"10px",
    verticalAlign: "middle",
}

export default (props) => {
    const context = useContext(SessionContext);
    const { currentPage } = props;
    const links = [];
    const [anchorEl, setAnchorEl] = React.useState(null);
    //const textStyle = fontStyle(context.session.theme);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    links.push({text:"Home", path:"/", disabled: currentPage === "home" })

    if (!context.session.userId) {
        links.push({text:"Log In", path:"/login", disabled: currentPage === "login"})
    } else {
        links.push({text:"Exercises", path:"/exercise/fresh", disabled: currentPage === "exercise"});
        links.push({text:"Reports", path:"/reports/onedate/today", disabled: currentPage === "reports"});
        links.push({text:"Log Out", path:"/logout", disabled: false});
    }   

    const followLink = (path, disabled) => {
        if (anchorEl !== null) setAnchorEl(null);
        if (disabled) return;
        navigate(path);
    } 

    return (<>       
        <AppBar position="static">
            <h1 className="bigScreen">Speech Therapy</h1>
            
            <div className="smallScreen left">
                <div style={smallStyle}>
                    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                        <MenuIcon fontSize="large"/>
                    </Button>
                    <Menu id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose} >
                        {links.map((link, i) =>
                            <MenuItem key={i} 
                                onClick={() => followLink(link.path, link.disabled)}
                                selected={link.disabled}
                                >{link.text}</MenuItem>
                        )}
                    </Menu>            
                </div>
                <h2>Speech Therapy</h2>
            </div>            
        </AppBar>

        <Card className="bigScreen" style={{marginBottom: "20px", padding:"0"}}>
            {links.map((link, i) =>                 
                <MenuItem key={i} color="primary" 
                    style={linkStyle} 
                    onClick={() => followLink(link.path, link.disabled)}
                    selected={link.disabled}>
                    {link.text === "Log Out" && <span>{context.session.firstName}: </span>}
                    {link.text}
                </MenuItem>
            )}
        </Card>

    </>);
}
