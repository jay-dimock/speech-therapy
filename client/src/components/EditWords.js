import React, {useState} from 'react';
import axios from 'axios';
import { navigate } from '@reach/router'

import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import TouchBackend from "react-dnd-touch-backend";

import SpeechEndpoint from '../constants/SpeechEndpoint';
import AxiosErrors from '../util/AxiosErrors';
import WordDraggable from '../components/WordDraggable';

const isTouchDevice = "ontouchstart" in window;
const backendForDnd = isTouchDevice ? TouchBackend : HTML5Backend;

export default (props) => {
    const {words, setWords} = props;
    const [deleting, setDeleting] = useState(false);

    const deleteWord = (index) => {
        if (deleting) return; 
        setDeleting(true);
        axios.put(SpeechEndpoint + "exercise/" + props.exerciseId + "/deleteWord", {index: index})
            .then(response => {
                if (response.data.words.length > 0) setWords(response.data.words);
                else deleteExercise();
            })
            .catch(err => { AxiosErrors(err); })
            .finally(() => setDeleting(false))
    }

    const deleteExercise = () => {
        axios.delete(SpeechEndpoint + "exercise/" + props.exerciseId)
            .then(response => {
                console.log("deleted exercise. navigating to new exercise");
                navigate ("/exercise");
            })
            .catch(err => { AxiosErrors(err); })
    }


    return (<div style={{marginTop:"15px"}}>
        <DndProvider backend={backendForDnd}>
            {words.map((word, i) => {
                return (
                    <WordDraggable 
                        key={word+i} 
                        index={i} 
                        exerciseId={props.exerciseId} 
                        word={word} 
                        deleteWord={deleteWord}
                        isTouchDevice={isTouchDevice} />
                );
            })}
        </DndProvider>        
    </div>);
}