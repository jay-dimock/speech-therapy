import React from 'react';
import LoginForm from '../components/LoginForm';
import { Link } from '@reach/router'

export default () => {

    return (<>
        <h2>Log In</h2>
        <LoginForm />
        <p>New user? <Link to="/register">Register</Link></p>
    </>)

}