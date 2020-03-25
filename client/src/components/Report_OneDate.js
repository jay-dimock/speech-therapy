import React, {useContext, useState, useEffect} from 'react';
import { navigate } from '@reach/router'
import axios from 'axios';
//import DateOnly from 'dateonly';

import { Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';

import SessionContext from '../util/SessionContext'
import SpeechEndpoint from '../constants/SpeechEndpoint';
import AxiosErrors from '../util/AxiosErrors';
import WrappedLink from './WrappedLink';

const OneDate = (props) => {
    const context = useContext(SessionContext);
    const [data, setData] = useState([]);
    
    const todayString = new Date().toISOString().substring(0, 10)
    const reportDateString = props.date === "today" ? todayString : props.date;
    const isToday = reportDateString === todayString;
    
    //converting from format YYYY-MM-DD results in the GMT date, not local date. 
    //to prevent this, we have to convert the format to YYYY/MM/DD. see this post:
    //https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off
    const friendlyDate = new Date(reportDateString.replace(/-/g, '/')).toDateString();

    useEffect(() => {
        //const dateParam = date.toISOString().substring(0, 10);
        const timezone = encodeURIComponent(Intl.DateTimeFormat().resolvedOptions().timeZone);
        axios.get(SpeechEndpoint + `reports/onedate/${reportDateString}/${timezone}/${context.session.userId}`)
            .then(res => {
                //console.log(res.data);
                if (res.data.length === 0) {
                    console.log("No exercises found for " + reportDateString + ". Redirecting to all dates.");
                    navigate('/reports');
                }
                setData(res.data);
            })
            .catch(err => AxiosErrors(err)) 
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (<>        
        <h3>{isToday ? "Today's Activity" : "Activity for " + friendlyDate}</h3>
        {!isToday && <p>Editing is only possible for exercises performed on today's date.</p>}
        <WrappedLink to="/reports">View activity for another date</WrappedLink>
        <Table style={{maxWidth:600, margin:"0 auto"}} size="small">
            <TableHead>
                <TableRow>
                    <TableCell>Category</TableCell>
                    <TableCell>Words</TableCell>
                    {isToday && <TableCell>Actions</TableCell>}
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((d, i) => {
                    return (
                        <TableRow key={i} style={{verticalAlign:"top"}}>
                            <TableCell>{d.category}<br/></TableCell>
                            <TableCell><u>{d.words.length} words</u>: <span>{d.words.join(', ')}</span></TableCell>
                            {isToday && <TableCell><WrappedLink to={"/editexercise/" + d._id}>Edit</WrappedLink></TableCell>}
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
    </>)
}

export default OneDate;