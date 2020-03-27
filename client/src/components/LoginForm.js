import React, {useState, useContext} from 'react';
import { Button, FormHelperText } from '@material-ui/core';
import TextInput from './TextInput';
import axios from 'axios';
import { navigate } from '@reach/router';

import SpeechEndpoint from "../constants/SpeechEndpoint";
import SessionContext from '../util/SessionContext';
import AxiosErrors from '../util/AxiosErrors';

const genericError = {
    padding: "10px 15px",
    marginTop: "10px",
    textAlign: "center",
    fontSize: "1rem"
}

export default () => {
    const context = useContext(SessionContext);

    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});

    const changeHandler = (fieldName, value) => {
        setUser({ ...user, [fieldName]: value })
    }

    const login = (e) => {
        e.preventDefault();
        
        axios.post(SpeechEndpoint + "user/login", user)
            .then(res => {
                console.log(res.data);
                //console.log("session (from login form) before update:", context.session);
                context.setSession({
                    ...context.session,
                    userId: res.data._id,
                    firstName: res.data.firstName,
                    lastName: res.data.lastName,
                    theme: res.data.theme,
                })
                navigate('/');
            })
            .catch(err => {
                setErrors(AxiosErrors(err));
            })
    }

    return (<>
        <form onSubmit={login}>
            <TextInput labelText="Email" fieldName="email" 
                value={user.email} error={errors["email"]} changeHandler={changeHandler}/>

            <TextInput labelText="Password" fieldName="password" type="password"
                value={user.password} error={errors["password"]} changeHandler={changeHandler}/>

            <Button type="button" variant="contained" color="primary" onClick={login}>Log In</Button>
        </form>
        {errors["error"] && 
            <FormHelperText style={genericError}  error={true}>{errors["error"]}</FormHelperText> 
        }        
    </>)
}