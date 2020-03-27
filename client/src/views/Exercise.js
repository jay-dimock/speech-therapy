import React, {useContext} from 'react';
import { Redirect, navigate } from '@reach/router'
import {Button} from '@material-ui/core';
import SessionContext from '../util/SessionContext';
import PageHeader from '../components/PageHeader';
import Instructions from '../components/Instructions';
import WrappedLink from '../components/WrappedLink';

export default (props) => {
    const context = useContext(SessionContext);
    if (!context.session.userId) { return <Redirect noThrow to="/login" /> }

    const restart = props.param === "restart";
    
    return (<> 
        <PageHeader currentPage="exercise"/>
        <div className="container">        
            <h2>Exercises</h2>
            {!restart && <p>Ready to start?</p>}
            {restart && <p>You skipped this category: {context.session.lastCategory}</p>}
            <Button variant="contained" color="primary" onClick={() => navigate("/startexercise")}>Start {restart && "New Category"}</Button>
            {context.session.userId==="guest" && 
                <p style={{maxWidth:"500px", margin: "10px auto", }}>As a Guest User, you can do exercises to see how it works -- but when the exercise is finished, 
                    you'll be taken back to this page without the chance to view or edit your results. For a better experience, 
                    please <WrappedLink to="/login">Log In</WrappedLink>. Your personal information will not be shared with anyone.</p>}
            <Instructions show={props.param === "instructions"}/>
        </div>
    </>)
}