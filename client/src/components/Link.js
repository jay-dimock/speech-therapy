import React, {useContext} from 'react';
//import { Link as RouterLink } from '@reach/router';
import { Link } from '@material-ui/core';
import SessionContext from '../util/SessionContext';

export default (props) => {
    const context = useContext(SessionContext);
    const currentTheme = context.session.theme || "dark";
    const linkClass = "link" + currentTheme;

    //"chrome://settings/content/microphone"
    if (props.to) return (
        <Link className={linkClass} href={props.to} onClick={props.onClick}>{props.children}</Link>
    )

    return (
        <Link className={linkClass} component="button" onClick={props.onClick}>{props.children}</Link>
    )    
}
