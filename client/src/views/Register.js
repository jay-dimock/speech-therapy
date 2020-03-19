import React, {useState, useContext} from 'react';
import RegistrationForm from '../components/RegistrationForm';
import { Link } from '@reach/router'

export default () => {

    return (<>
    <h2>Register New User</h2>
    <RegistrationForm />
    <p>Already a registered? <Link to="/login">Log In</Link></p>
    </>)

}