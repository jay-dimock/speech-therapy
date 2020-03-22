import React from 'react';
import { Link as RouterLink } from '@reach/router';
import { Link } from '@material-ui/core';

export default (props) => {
    return (
        <RouterLink to={props.to}>
            <Link component="button" style={{padding: "0 10px"}}>{props.children}</Link>
        </RouterLink>
    )    
}
