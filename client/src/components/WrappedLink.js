import React from 'react';
import { Link as RouterLink } from '@reach/router';
import { Link } from '@material-ui/core';

export default (props) => {
    const style = { padding: "0" }
    if(props.menuItem) {
        style.padding = "0 10px";
        style["fontWeight"] = "bold";
    }
    
    return (
        <RouterLink to={props.to}>
            <Link component="button" style={style}>{props.children}</Link>
        </RouterLink>
    )    
}
