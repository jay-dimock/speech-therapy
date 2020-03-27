import React, {useState, useContext} from 'react';
import { Button, FormHelperText } from '@material-ui/core';
import TextInput from './TextInput';
import axios from 'axios';
import { navigate } from '@reach/router';

import SpeechEndpoint from "../constants/SpeechEndpoint";
import SessionContext from '../util/SessionContext';
import AxiosErrors from '../util/AxiosErrors';
import Link from './Link';

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
                context.setSession({
                    ...context.session,
                    userId: res.data._id,
                    firstName: res.data.firstName,
                    lastName: res.data.lastName,
                    theme: res.data.theme
                })
                navigate('/');
            })
            .catch(err => {
                setErrors(AxiosErrors(err));
            })
    }

    const guestLogin = () => {
        context.setSession ({
            ...context.session,
            userId: "guest",
            firstName: "Guest",
        })
        navigate('/');
    }

    return (<>
        <form onSubmit={login}>
            <TextInput labelText="Email" fieldName="email" 
                value={user.email} error={errors["email"]} changeHandler={changeHandler}/>

            <TextInput labelText="Password" fieldName="password" type="password"
                value={user.password} error={errors["password"]} changeHandler={changeHandler}/>

            <Button style={{margin:"10px"}} type="button" variant="contained" color="primary" onClick={login}>Log In</Button>
        </form>
        <Link onClick={guestLogin}>Log in as Guest</Link>
        {errors["error"] && 
            <FormHelperText style={genericError}  error={true}>{errors["error"]}</FormHelperText> 
        }        
    </>)
}