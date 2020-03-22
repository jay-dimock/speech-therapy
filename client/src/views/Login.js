import React from 'react';
import LoginForm from '../components/LoginForm';

import PageHeader from '../components/PageHeader'
import WrappedLink from '../components/WrappedLink'

export default () => {

    return (<>
        <PageHeader currentPage="login"/>
        <h2>Log In</h2>
        <LoginForm />
        <p>New user? <WrappedLink to="/register">Register</WrappedLink></p>
    </>)

}