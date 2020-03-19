import React, {useState, useContext} from 'react';
import { Button } from '@material-ui/core';
import TextInput from './TextInput';
import axios from 'axios';
import SpeechEndpoint from "../constants/SpeechEndpoint";
import MyContext from '../context/MyContext'

export default () => {
    const context = useContext(MyContext);

    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});

    const changeHandler = (fieldName, value) => {
        //console.log(fieldName, value);
        setUser({ ...user, [fieldName]: value })
    }

    const login = (e) => {
        e.preventDefault();
        setErrors({});
        
        axios.post(SpeechEndpoint + "login", user)
            .then(res => {
                context.setUser({
                    firstName: res.data.firstName,
                    lastName: res.data.lastName,
                    id:res.data._id,
                })
                setUser({});
            })
    }

    return (<>
        <form onSubmit={login}>
            <TextInput labelText="Email" fieldName="email" value={user.email} errors={errors} changeHandler={changeHandler}/>
            <TextInput labelText="Password" fieldName="password" value={user.password} errors={errors} changeHandler={changeHandler}/>
            <Button type="button" variant="contained" color="primary" onClick={login}>Register</Button>
        </form>
    </>)
}