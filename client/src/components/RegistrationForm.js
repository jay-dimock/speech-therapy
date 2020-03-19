import React, {useState, useContext} from 'react';
import { Button } from '@material-ui/core';
import TextInput from './TextInput';
import axios from 'axios';
import SpeechEndpoint from "../constants/SpeechEndpoint";
import MyContext from '../context/MyContext'

export default () => {
    const context = useContext(MyContext);

    const [newUser, setNewUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirm: "",
    });

    const [errors, setErrors] = useState({});

    const changeHandler = (fieldName, value) => {
        //console.log(fieldName, value);
        setNewUser({ ...newUser, [fieldName]: value })
    }

    const register = (e) => {
        e.preventDefault();
        setErrors({});

        axios.post(SpeechEndpoint + "register", newUser)
            .then(res => {
                context.setUser({
                    firstName:newUser.firstName, 
                    lastName:newUser.lastName,
                    id: res.data._id
                })
                setNewUser({});
            })
            .catch(err => {
                console.log(err.response);
                const errResponse = err.response.data.errors;
                const errDict = {};
                for (const key of Object.keys(errResponse)) {
                    console.log(`${key}: ${errResponse[key].message}`);
                    errDict[key] = errResponse[key].message;
                }
                setErrors(errDict);
            })
    }

    return (
        <form onSubmit={register}>
            <TextInput labelText="First Name" fieldName="firstName" 
                value={newUser.firstName} errors={errors} changeHandler={changeHandler}/>
            <TextInput labelText="Last Name" fieldName="lastName" 
                value={newUser.lastName} errors={errors} changeHandler={changeHandler}/>
            <TextInput labelText="Email" fieldName="email" type="email"
                value={newUser.email} errors={errors} changeHandler={changeHandler}/>
            <TextInput labelText="Password" fieldName="password" type="password"
                value={newUser.password} errors={errors} changeHandler={changeHandler}/>
            <TextInput labelText="Confirm Password" fieldName="passwordConfirm" type="password"
                value={newUser.passwordConfirm} errors={errors} changeHandler={changeHandler}/>
            <Button type="button" variant="contained" color="primary" onClick={register}>Register</Button>
        </form>
    )
}