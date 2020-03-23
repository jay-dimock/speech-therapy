import React, {useContext} from 'react';
import SessionContext from '../util/SessionContext'

import {Link} from '@material-ui/core';

import PageHeader from '../components/PageHeader'
import WrappedLink from '../components/WrappedLink';


export default (props) => {
    const context = useContext(SessionContext);

    return (<>
        <PageHeader currentPage="home"/>
        <div className="container">
        {context.session.userId && <>
            <h3>Welcome, {context.session.firstName}!</h3>
            <WrappedLink to="/exercies"><h4>Start Exercises</h4></WrappedLink>
        </>}
        
        <h2>About</h2>
        <p>This site provides a specific type of cognitive speech therapy 
            exercise: finding words to match categories. This is done using Speech Recognition 
            web API to record spoken words. Currently, the Speech Recognition API only works 
            with the Chrome browser, and only if the user is NOT using iOS (iPhone, iPad). 
            This may change in the future. See "Browser Support" 
            on <Link href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#Browser_support">
            this page</Link> for updates.</p>
        <h2>Instructions</h2>
        <p>The exercise will not record a multi-word answer as a single answer. 
            Instead, it will record each word as a separate answer (North Carolina will register as "North" and "Carolina").
            After completing the exercies, you'll be able to edit words by clicking on them and typing your edits, and you can delete words by clicking the red X 
            symbol beside them. In this way, a multi-word answer can be fixed by editing the first word to equal the entire 
            phrase, then deleting the separate words that follow it.
        </p>
        {!context.session.userId &&
            <p>Ready to begin? <WrappedLink to="/login">Log In</WrappedLink></p>
        }
        </div>
    </>)
}