import React, {useContext} from 'react'
import {AppBar, Card} from '@material-ui/core'

import WrappedLink from './WrappedLink'
import SessionContext from '../util/SessionContext';

export default (props) => {
    const context = useContext(SessionContext);
    const { currentPage } = props;
    const links = [];

    if (currentPage !== "home") {
        links.push(<WrappedLink to="/" menuItem={true}>Home</WrappedLink>);
    } else if ( !context.session.userId ) {
        links.push(<WrappedLink to="/login" menuItem={true}>Log In</WrappedLink>)
    }

    if (context.session.userId) {
        if (currentPage !== "exercise") links.push(<WrappedLink to="/exercise/fresh" menuItem={true}>Exercises</WrappedLink>)
        if (currentPage !== "reports") links.push(<WrappedLink to="/reports/onedate/today" menuItem={true}>Reports</WrappedLink>)
        
        links.push(<>
            <span style={{marginLeft:"40px"}}>Logged in as: {context.session.firstName}</span>
            <WrappedLink to="/logout" menuItem={true}>Log Out</WrappedLink>
        </>);
    }

    return (<>
        <AppBar position="static">
            <h1>Speech Therapy</h1>
        </AppBar>
        <Card style={{marginBottom: "20px", padding:"10px"}}>
            {links.map((link, i) => 
                <span key={i}>{link}</span>
            )}
        </Card>
    </>);
}