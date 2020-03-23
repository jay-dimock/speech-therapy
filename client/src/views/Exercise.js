import React, {useContext, useState, useEffect} from 'react';
import { useSpeechRecognition } from "react-speech-kit"; //https://github.com/MikeyParton/react-speech-kit

import { Redirect } from '@reach/router'
import {Button} from '@material-ui/core';

import SessionContext from '../util/SessionContext'
import PageHeader from '../components/PageHeader'
import Categories from '../constants/Categories';
import Timer from '../components/Timer';
import Transcript from '../components/Transcript';


export default (props) => {
    const context = useContext(SessionContext);
    if (!context.session.userId) { return <Redirect noThrow to="/login" /> }

    const [category, setCategory] = useState("");
    const [seconds, setSeconds] = useState(0);
    const [transcript, setTranscript] = useState("");
    const { listen, listening, stop, supported } = useSpeechRecognition({
        onResult: result => {
            setTranscript(prevTranscript => prevTranscript + " " + result);
        }
    })

    if(!supported) {
        return (<div>This browser does not support the Web Speech API.
            Try opening this site in Google Chrome (Desktop or Android, but NOT iOS). 
            <br/><a href='https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#Browser_support'>
            Learn more about browser compatibility</a></div>);
    }
    
    useEffect(() => {
        setTimeout(() => {
            if(seconds > 0) {
                if (listening) setSeconds(seconds - 1)
                else setSeconds(0);
            } else if (listening) {
                stop();
                setSeconds(0);
            }
        }, 1000);
    }, [seconds]);

    const startCategory = (e) => {
        e.preventDefault();
        setCategory(getNewCategory);
        setSeconds(60);
        setTranscript("");
        listen({interimResults:false});
    }

    const getNewCategory = () => {
        const randomCategory = Categories[Math.floor(Math.random() * Categories.length)];
        //if random category happens to match the current one, try again
        if (randomCategory === category) return getNewCategory();
        return randomCategory;
    }

    return (<>
        <PageHeader currentPage="exercise"/>
        {/* <Transcript /> */}
        <div className="container">
        
        <h2>Exercises</h2>
        {category && <>
            <h4>The category is...</h4>
            <h3>{category}</h3>
            <Timer seconds={seconds}/>
            <div>{listening ? "listening" : "stopped listening"}</div>
            {/* <textarea value={transcript}
                onChange={e => setTranscript(e.target.value)} /> */}
            {listening && <Button variant="contained" color="secondary" onClick={stop}>Quit Early</Button>}
            <Transcript text={transcript} />
        </>}
        {!category && <Button variant="contained" color="primary" onClick={startCategory}>Start!</Button>}
        </div>
    </>)
}