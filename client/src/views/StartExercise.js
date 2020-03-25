import React, {useContext, useState, useEffect} from 'react';
import { useSpeechRecognition } from 'react-speech-kit'; //https://github.com/MikeyParton/react-speech-kit
import axios from 'axios';

import { Redirect, navigate } from '@reach/router'
import {Button} from '@material-ui/core';

import SpeechEndpoint from '../constants/SpeechEndpoint';
import SessionContext from '../util/SessionContext';
import PageHeader from '../components/PageHeader';
import Categories from '../constants/Categories';
import Timer from '../components/Timer';
import Transcript from '../components/Transcript';
import AxiosErrors from '../util/AxiosErrors';


export default (props) => {
    const context = useContext(SessionContext);
    if (!context.session.userId) { return <Redirect noThrow to="/login" /> }

    const [listeningState, setListeningState] = useState(false);
    const [seconds, setSeconds] = useState(0);
    const [transcript, setTranscript] = useState("");
    const [category, setCategory] = useState("");

    const { listen, listening, stop, supported } = useSpeechRecognition({
        onResult: result => {
            console.log("on result triggered")
            setTranscript(prevTranscript => prevTranscript + " " + result);
        },
        onEnd: () => {
            console.log("on end triggered")
            setListeningState(false);
            endExercise();
        }
    })

    if(!supported) {
        return (<div>This browser does not support the Web Speech API.
            Try opening this site in Google Chrome (Desktop or Android, but NOT iOS). 
            <br/><a href='https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#Browser_support'>
            Learn more about browser compatibility</a></div>);
    }

    useEffect(() => {
        setListeningState(listening);        
        console.log("   listening: " + listening);        
    }, [listening]);


   useEffect(() => {  //listen() has to run in useEffect or it will throw errors.  
        setNewCategory();        
        listen({interimResults:false});
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        setTimeout(() => {
            if(seconds > 0) {
                if (listening) setSeconds(seconds - 1)
                else setSeconds(0);
            } else if (listening) {                
                stop();
            }
        }, 1000);
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [seconds]);


    const setNewCategory = () => {
        const newCat = Categories[Math.floor(Math.random() * Categories.length)];
        if (newCat === context.session.lastCategory) {
            console.log("Random new category matches last category. Trying again...")
            return setNewCategory();
        }
        setCategory(newCat);
        setSeconds(60);
        context.setSession({
            ...context.session,
            lastCategory: newCat
        });
    }

    const endExercise = () => {
        if (transcript.length === 0) {
            navigate('/exercise/restart');
            return;
        }
        
        axios.post(SpeechEndpoint + "exercise", 
            {userId:context.session.userId, category:category, transcript:transcript})
            .then(result => {
                console.log(result);
                navigate('/editexercise/' + result.data._id)
            })
            .catch(err => AxiosErrors(err))
    }

    return (<>        
        <PageHeader currentPage="exercise"/>
        <div className="container">        
            <h2>Exercises</h2>
            {category && <>
                <h4>The category is...</h4>
                <h3>{category}</h3>
                <Timer seconds={seconds}/>
                <div>{listeningState ? "listening" : "stopped listening"}</div>

                {listeningState && 
                    <Button variant="contained" color="secondary" onClick={stop}>
                        {transcript.length===0 ? "New Category" : "Quit Early"}
                    </Button>}
                <Transcript text={transcript} />
            </>}
        </div>
    </>)
}