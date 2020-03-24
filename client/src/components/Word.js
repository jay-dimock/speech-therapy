import React, {useState} from 'react';
import axios from 'axios';
import ContentEditable from 'react-contenteditable';

import SpeechEndpoint from '../constants/SpeechEndpoint';
import AxiosErrors from '../util/AxiosErrors';

export default (props) => {
    const { exerciseId, index, deleteWord } = props;
    const [word, setWord] = useState(props.word);

    const updateWord = (e) => {
        const updatedWord = e.target.value.trim();

        axios.put(SpeechEndpoint + "exercise/" + exerciseId + "/updateWord", {index:index, word:updatedWord})
            .then(response => {
                setWord(updatedWord);
                if (updatedWord.length === 0) deleteWord(index);
            })
            .catch(err => { AxiosErrors(err); })
    }

    const disableNewLines = (event) => {
        var keyCode = event.which || event.keyCode;
        keyCode === 13 && event.preventDefault();
    }

    return (
        <ContentEditable 
            style={{display:"inline-block"}} 
            html={word} 
            onKeyPress={(e) => disableNewLines(e)}
            onChange={updateWord}/>
    );
}