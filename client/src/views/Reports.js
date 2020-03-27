import React, {useContext} from 'react';
import { Redirect } from '@reach/router';

import SessionContext from '../util/SessionContext'
import PageHeader from '../components/PageHeader'
import AllDates from '../components/Report_AllDates';
import OneDate from '../components/Report_OneDate';
import WrappedLink from '../components/WrappedLink';

export default (props) => {
    const report = props.report || "alldates";
    const context = useContext(SessionContext);
    if (!context.session.userId) { return <Redirect noThrow to="/login" /> }

    if (context.session.userId === "guest") {        
        return (<>
            <PageHeader currentPage="reports"/>
            <h2>Reports</h2>
            <p>As a Guest User, your exercises are not saved.</p>
            <p>To save your results and view them over 
            time, <WrappedLink to="/login">Log In</WrappedLink> or <WrappedLink to="/register">Register</WrappedLink>.</p>
        </>)
    }

    return (<>
        <PageHeader currentPage="reports"/>
        <h2>Reports</h2>
        <div className="container">
            {report === "alldates" && <AllDates />}
            {report === "onedate" && <OneDate date={props.param || "today" } />}
        </div>        
    </>)
}