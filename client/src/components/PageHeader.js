import React, {useContext} from 'react'
import {AppBar, Card} from '@material-ui/core'

import WrappedLink from './WrappedLink'
import SessionContext from '../util/SessionContext';

export default (props) => {
    const context = useContext(SessionContext);
    //const linkText = props.linkText || "Back to Home";
    //const linkTo = props.linkTo || "/";
    const { currentPage } = props;
    const links = [];

    if (context.session.userId && currentPage !== "home") {
        links.push(<WrappedLink to="/">Back to Home</WrappedLink>);
    }

    if (currentPage !== "about") links.push(<WrappedLink to="/about">About</WrappedLink>);

    if (context.session.userId) {
      
        if (currentPage !== "exercises") links.push(<WrappedLink to="/exercises">Exercises</WrappedLink>)
        if (currentPage !== "reports") links.push(<WrappedLink to="/reports">Reports</WrappedLink>)
        
        links.push(<>
            <span style={{marginLeft:"40px"}}>Logged in as: {context.session.firstName}</span>
            <WrappedLink to="/login">Log Out</WrappedLink>
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