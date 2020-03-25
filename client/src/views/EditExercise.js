import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import { Redirect, navigate } from '@reach/router'
import { Button } from '@material-ui/core';

import SessionContext from '../util/SessionContext';
import SpeechEndpoint from '../constants/SpeechEndpoint';
import PageHeader from '../components/PageHeader'
import EditWords from '../components/EditWords'
import AxiosErrors from '../util/AxiosErrors';
import DeleteWord from '../components/DeleteWord';

export default (props) => {
    const context = useContext(SessionContext);
    if (!context.session.userId) { return <Redirect noThrow to="/login" /> }
    
    const [category, setCategory] = useState("");
    const [words, setWords] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get(SpeechEndpoint + "exercise/" + props.id)
            .then(response => {
                setCategory(response.data.category);
                setWords(response.data.words);
                setLoaded(true); 
            })
            .catch(err => {
                console.log(AxiosErrors(err));
            })
       //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (<>
        <PageHeader currentPage="editexercise"/>
        <div className="container">
            <h2>Results</h2>
            <h3>Category: {category}</h3>
            <Button variant="contained" color="primary" onClick={() => navigate("/startexercise")}>Start New Exercise</Button>
            <p>You recorded <b>{words.length} words!</b><br/>
            You can edit a word by typing over it. and delete a word by clicking the delete symbol: <DeleteWord action={()=>false}/>,
            or by backspacing over the entire word. Your changes will automatically be saved.</p>
            {loaded && <EditWords words={words} setWords={setWords} exerciseId={props.id} />} 
        </div>
    </>);
}
