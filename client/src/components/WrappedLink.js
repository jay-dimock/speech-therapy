import React, {useContext} from 'react';
import { Link as RouterLink } from '@reach/router';
import { Link } from '@material-ui/core';
import SessionContext from '../util/SessionContext';

export default (props) => {
    const context = useContext(SessionContext);
    
    const style = { padding: "0" }
    if(props.menuItem) {
        style.padding = "0 10px";
        style["fontWeight"] = "bold";
    }
    
    const currentTheme = context.session.theme || "dark";
    const linkClass = "link" + currentTheme;

    return (
        <RouterLink to={props.to || ""}>
            <Link className={linkClass} component="button" style={style}>{props.children}</Link>
        </RouterLink>
    )    
}
