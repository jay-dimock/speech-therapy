import React, {useContext} from 'react';
import { Redirect } from '@reach/router';

import SessionContext from '../util/SessionContext'
import PageHeader from '../components/PageHeader'
import AllDates from '../components/Report_AllDates';
import OneDate from '../components/Report_OneDate';

export default (props) => {
    const report = props.report || "alldates";
    const context = useContext(SessionContext);
    if (!context.session.userId) { return <Redirect noThrow to="/login" /> }

    return (<>
        <PageHeader currentPage="reports"/>

        <h2>Reports</h2>
        <div className="container">
            {report === "alldates" && <AllDates />}
            {report === "onedate" && <OneDate date={props.param || "today" } />}
        </div>        
    </>)
}