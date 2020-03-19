import React, {useContext} from 'react';
// import RegistrationForm from '../components/RegistrationForm';
// import LoginForm from '../components/LoginForm';
import MyContext from '../context/MyContext'
import { navigate, Redirect } from '@reach/router'

export default (props) => {
    const context = useContext(MyContext);

    if (!context.user.id){
        console.log("redirecting to login")
        return <Redirect noThrow to="/login" />
    }

    return (
        <p>Welcome to the main page</p>
    )
}