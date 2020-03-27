import React, {useContext, useState, useEffect} from 'react';
//import { useSpeechRecognition } from 'react-speech-kit'; //https://github.com/MikeyParton/react-speech-kit
import useSpeechRecognition from '../util/SpeechRecognition';
import axios from 'axios';

import { Redirect, navigate } from '@reach/router'
import { Button, Link } from '@material-ui/core';

import SpeechEndpoint from '../constants/SpeechEndpoint';
import SessionContext from '../util/SessionContext';
import PageHeader from '../components/PageHeader';
import { Categories, allowCaps } from '../constants/Categories';
import Timer from '../components/Timer';
import Transcript from '../components/Transcript';
import AxiosErrors from '../util/AxiosErrors';

export default (props) => {
    const context = useContext(SessionContext);
    if (!context.session.userId) { return <Redirect noThrow to="/login" /> }

    let lowercase = true;

    const [seconds, setSeconds] = useState(0);
    const [transcript, setTranscript] = useState("");
    const [category, setCategory] = useState("");

    const { listen, listening, stop, supported } = useSpeechRecognition({
        onResult: result => {
            console.log("on result triggered")
            const newTranscript = (lowercase) ? result.toLowerCase() : result;
            setTranscript(prevTranscript => prevTranscript + " " + newTranscript);
        },
        onEnd: () => {
            console.log("on end triggered")
            endExercise();
        }
    })

    if(!supported) {
        return (<>
            <PageHeader currentPage="exercise"/>
            <h2>Exercises</h2>
            <div>This browser does not support the Web Speech API.<br/>
            Try opening this site in Google Chrome (Desktop or Android, but NOT iOS). 
            <br/><Link href='https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#Browser_support'>
            Learn more about browser compatibility</Link></div></>);
    }

   useEffect(() => {  //listen() has to run in useEffect or it will throw errors.  
        setNewCategory();        
        listen({interimResults:false});
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        //console.log("timer useEffect fired. seconds = " + seconds); 
        const ticker = setTimeout(() => {  
            if(seconds > 0) {
                if (listening) setSeconds(seconds - 1)
            } else if (listening) { 
                stop();
            }
        }, 1000); 
    
        return () => clearTimeout(ticker); //cleanup (will unmount)
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [seconds]);


    const setNewCategory = () => {
        const newCat = Categories[Math.floor(Math.random() * Categories.length)];
        if (newCat === context.session.lastCategory) {
            console.log("Random new category matches last category. Trying again...")
            return setNewCategory();
        }
        if (allowCaps(newCat)) lowercase = false;
        setCategory(newCat);
        setSeconds(60);
        context.setSession({
            ...context.session,
            lastCategory: newCat
        });
    }

    const endExercise = () => {
        if (context.session.userId === "guest") {
            navigate('/exercise/fresh');
            return;
        }

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
                    <Button variant="contained" color="secondary" onClick={stop}>
                        {transcript.length===0 ? "New Category" : "Quit Early"}
                    </Button>
                <Transcript text={transcript} />
            </>}
        </div>
    </>)
}