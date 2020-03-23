import React from 'react';
import LoginForm from '../components/LoginForm';

import PageHeader from '../components/PageHeader'
import WrappedLink from '../components/WrappedLink'

export default () => {

    return (<>
        <PageHeader currentPage="login"/>
        <h2>Log In</h2>
        <LoginForm />
        <div style={{marginTop:"10px"}}>New user? <WrappedLink to="/register">Register</WrappedLink></div>
    </>)

}