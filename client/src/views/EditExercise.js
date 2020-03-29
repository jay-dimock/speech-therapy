import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import { Redirect, navigate } from '@reach/router'
import { Button, Link } from '@material-ui/core';
import FlipToFrontIcon from '@material-ui/icons/FlipToFront';

import SessionContext from '../util/SessionContext';
import SpeechEndpoint from '../constants/SpeechEndpoint';
import PageHeader from '../components/PageHeader'
import EditWords from '../components/EditWords'
import AxiosErrors from '../util/AxiosErrors';
import DeleteWord from '../components/DeleteWord';

const dragIconStyle = {
    verticalAlign: "middle", 
    fontSize: "medium",
}

export default (props) => {
    const context = useContext(SessionContext);
    if (!context.session.userId) { return <Redirect noThrow to="/login" /> }
    
    const [category, setCategory] = useState("");
    const [words, setWords] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [showInstructions, setShowInstructions] = useState(props.show || props.alwaysShow || false);    

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
            <h4>You recorded <b>{words.length} words!</b></h4>
            <Link style={{marginBottom:"0.5rem"}} component="button" onClick={()=>setShowInstructions(!showInstructions)}>
                {showInstructions ? "Hide Instructions" : "Editing Instructions"}
            </Link>
            {showInstructions && <>
                <p>To edit a word, by typing over it (if you back-space over it, the word will be deleted).</p><p>
                To combine 2 words, drag one word on top of the other using the drag symbol <FlipToFrontIcon style={dragIconStyle} color="primary" />.</p><p>
                To delete a word, by click the delete symbol: <DeleteWord action={()=>false}/>,
                or back-space over the entire word.</p>            
            </>}
            
            {loaded && <EditWords words={words} setWords={setWords} exerciseId={props.id} />} 
        </div>
    </>);
}
