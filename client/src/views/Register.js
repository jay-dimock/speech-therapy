import React from 'react';
import RegistrationForm from '../components/RegistrationForm';

import PageHeader from '../components/PageHeader'
import WrappedLink from '../components/WrappedLink'

export default () => {

    return (<>
        <PageHeader currentPage="register"/>
        <h2>Register New User</h2>
        <RegistrationForm />
        <p>Already a registered? <WrappedLink to="/login">Log In</WrappedLink></p>
    </>)

}