import React, {useContext} from 'react';
import { Redirect, navigate } from '@reach/router'
import {Button, Link} from '@material-ui/core';
import SessionContext from '../util/SessionContext';
import PageHeader from '../components/PageHeader';
import Instructions from '../components/Instructions';

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
            <Instructions show={props.param === "instructions"}/>
        </div>
    </>)
}