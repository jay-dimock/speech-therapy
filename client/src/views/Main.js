import React, {useContext} from 'react';

import {navigate} from '@reach/router';
import {Link} from '@material-ui/core';

import axios from 'axios';
import AxiosErrors from '../util/AxiosErrors';

import SessionContext from '../util/SessionContext'
import SpeechEndpoint from '../constants/SpeechEndpoint';
import PageHeader from '../components/PageHeader'
import WrappedLink from '../components/WrappedLink';
import Instructions from '../components/Instructions';
//import Typography from '@material-ui/core/Typography';
//import {fontStyle} from '../util/Theme';


export default (props) => {
    const context = useContext(SessionContext);
    const currentTheme = context.session.theme || "dark";
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    //const textStyle = fontStyle(context.session.theme);
    //console.log(textStyle);
    const linkClass = "link" + currentTheme;

    const saveNewTheme = () => {
        if (!context.session.userId) {
            toggleTheme();
            return;
        }

        axios.put(SpeechEndpoint + "user/" + context.session.userId, {
            theme: newTheme
        })
        .then(res => toggleTheme())
        .catch(err => AxiosErrors(err))
    }

    const toggleTheme = () => {
        context.setSession ({
            ...context.session,
            theme: newTheme
        });
        navigate('/')
    }

    // style={{color: "#4db6ac"}}

    return (<>
        <PageHeader currentPage="home"/>
        <div className="container">
        <h2>About</h2>
        <p className="left">This site provides a specific type of cognitive speech therapy 
            exercise: thinking of and speaking words to match categories. This is done using the <Link className={linkClass} 
            href="https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition">Speech Recognition 
            Web API</Link> to record spoken words. Currently, the Speech Recognition API only works 
            with the Chrome browser, and only if the user is NOT using iOS (iPhone, iPad). 
            This may change in the future. See "Browser Support" 
            on <Link className={linkClass} href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#Browser_support">
            this page</Link> for updates.</p>

        <Link component="button" onClick={saveNewTheme} className={linkClass}>Switch to {newTheme} theme</Link> 
        
        {!context.session.userId && <Instructions alwaysShow={true}/>}
        {!context.session.userId && <p>Ready to begin? <WrappedLink to="/login">Log In</WrappedLink></p> }

        {context.session.userId && <p>GetStarted: <WrappedLink to="/exercise/instructions">Exercises / Instructions</WrappedLink></p>}
        </div>
    </>)
}