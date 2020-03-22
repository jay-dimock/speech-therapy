import React, {useContext} from 'react';
import SessionContext from '../util/SessionContext'
import { Redirect } from '@reach/router'

import PageHeader from '../components/PageHeader'

export default (props) => {
    const context = useContext(SessionContext);

    if (!context.session.userId){
        console.log("redirecting to login")
        return <Redirect noThrow to="/login" />
    }

    return (<>
        <PageHeader currentPage="home"/>
        <p>Welcome, {context.session.firstName}</p>
    </>)
}