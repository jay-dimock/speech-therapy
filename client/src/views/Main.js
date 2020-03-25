import React, {useContext} from 'react';
import SessionContext from '../util/SessionContext'

import {Link} from '@material-ui/core';

import PageHeader from '../components/PageHeader'
import WrappedLink from '../components/WrappedLink';
import Instructions from '../components/Instructions';


export default (props) => {
    const context = useContext(SessionContext);

    return (<>
        <PageHeader currentPage="home"/>
        <div className="container">
        {/* {context.session.userId && <>
            <h3>Welcome, {context.session.firstName}!</h3>
            <WrappedLink to="/exercise"><h4>Start Exercises</h4></WrappedLink>
        </>} */}
        
        <h2>About</h2>
        <p className="left">This site provides a specific type of cognitive speech therapy 
            exercise: thinking of and speaking words to match categories. This is done using the <Link 
            href="https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition">Speech Recognition 
            Web API</Link> to record spoken words. Currently, the Speech Recognition API only works 
            with the Chrome browser, and only if the user is NOT using iOS (iPhone, iPad). 
            This may change in the future. See "Browser Support" 
            on <Link href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#Browser_support">
            this page</Link> for updates.</p>
        
        {!context.session.userId && <Instructions alwaysShow={true}/>}
        {!context.session.userId && <p>Ready to begin? <WrappedLink to="/login">Log In</WrappedLink></p> }
        
        {context.session.userId && <p>GetStarted: <WrappedLink to="/exercise/instructions">Exercises / Instructions</WrappedLink></p>}
        </div>
    </>)
}