import React, {useContext, useState} from 'react';
import SessionContext from '../util/SessionContext'

import { Redirect } from '@reach/router'
import {Button} from '@material-ui/core';

import PageHeader from '../components/PageHeader'
//import WrappedLink from '../components/WrappedLink';
import Categories from '../constants/Categories';
import Timer from '../components/Timer';


export default (props) => {
    const context = useContext(SessionContext);
    if (!context.session.userId) { return <Redirect noThrow to="/login" /> }

    const [category, setCategory] = useState("");

    const startCategory = (e) => {
        e.preventDefault();
        setCategory(getNewCategory);
    }

    const getNewCategory = () => {
        //console.log(Categories);
        const randomCategory = Categories[Math.floor(Math.random() * Categories.length)];
        //if random category happens to match the current one, try again
        if (randomCategory === category) return getNewCategory();
        return randomCategory;
    }

    return (<>
        <PageHeader currentPage="exercise"/>
        <div className="container">
        
        <h2>Exercises</h2>
        {category && <>
            <h4>The category is...</h4>
            <h3>{category}</h3>
            <Timer />
        </>}
        <Button variant="contained" color="primary" onClick={startCategory}>Start!</Button>
        </div>
    </>)
}