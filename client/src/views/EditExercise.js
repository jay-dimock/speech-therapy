import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import { Redirect } from '@reach/router'

import SessionContext from '../util/SessionContext';
import SpeechEndpoint from '../constants/SpeechEndpoint';
import PageHeader from '../components/PageHeader'
import EditWords from '../components/EditWords'
import AxiosErrors from '../util/AxiosErrors';

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
            <h3 color="primary">{category}</h3>
            {loaded && <EditWords words={words} exerciseId={props.id} />}
        </div>
    </>);
}
