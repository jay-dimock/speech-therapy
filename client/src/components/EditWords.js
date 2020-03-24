import React, {useState} from 'react';
import axios from 'axios';
import { navigate } from '@reach/router'
import ClearIcon from '@material-ui/icons/Clear';

import SpeechEndpoint from '../constants/SpeechEndpoint';
import AxiosErrors from '../util/AxiosErrors';
import Word from '../components/Word';


const wordStyle = {
    display: "inline-block",
    border: "1px solid lightgray",
    borderRadius: "6px",
    padding: "4px 8px",
    margin: "6px 6px",
}

const iconStyle = {
    fontSize: "medium",
    verticalAlign: "middle",
    marginRight: "5px",
}

export default (props) => {
    const [words, setWords] = useState([...props.words]);
    const [deleting, setDeleting] = useState(false);

    const deleteWord = (index) => {
        console.log("index to delete: " + index);
        if (deleting) return;        
        setDeleting(true);
        axios.put(SpeechEndpoint + "exercise/" + props.exerciseId + "/deleteWord", {index: index})
            .then(response => {
                console.log(response.data);
                if (response.data.words.length > 0) setWords(response.data.words);
                else deleteExercise();
            })
            .catch(err => { AxiosErrors(err); })
            .finally(() => setDeleting(false))
    }

    const deleteExercise = () => {
        axios.delete(SpeechEndpoint + "exercise/" + props.exerciseId)
            .then(response => {
                console.log(response);
                navigate ("/exercise");
            })
            .catch(err => { AxiosErrors(err); })
    }


    return (<div style={{marginTop:"15px", overflow:"wrap"}}>
        {words.map((word, i) => {
            return (
                <span style={wordStyle} key={word+i}>
                    <ClearIcon style={iconStyle} color="secondary" onClick={() => deleteWord(i)}/> 
                    <Word exerciseId={props.exerciseId} index={i} word={word} deleteWord={deleteWord}/>
                </span>);
        })}
    </div>);
}