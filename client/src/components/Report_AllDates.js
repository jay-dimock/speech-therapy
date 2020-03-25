import React, {useContext, useState, useEffect} from 'react';
import axios from 'axios';

import { Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';

import SessionContext from '../util/SessionContext'
import SpeechEndpoint from '../constants/SpeechEndpoint';
import AxiosErrors from '../util/AxiosErrors';
import WrappedLink from './WrappedLink';

const AllDates = (props) => {
    const context = useContext(SessionContext);
    const [data, setData] = useState([])
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const timezone = encodeURIComponent(Intl.DateTimeFormat().resolvedOptions().timeZone);
        axios.get(SpeechEndpoint + "reports/alldates/" + timezone + "/" + context.session.userId)
            .then(res => {
                //console.log(res.data);
                setData(res.data);
                setLoaded(true);
            })
            .catch(err => { AxiosErrors(err); })
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

return (<>
        {loaded && data.length === 0 && <>
            <h3>No Exercises Found</h3>
            <p>No exercises were found for this user in the database.<br/>
            Make sure you are logged in and have completed at least one exercise.</p>
        </>}

        {loaded && data.length > 0 && <>
        <h3>Summary: Activity by Date</h3>
        <Table style={{maxWidth:400, margin:"0 auto"}} size="small">
            <TableHead>
                <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Exercises</TableCell>
                    <TableCell>Action</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((d, i) => {
                    return (
                        <TableRow key={i}>
                            <TableCell>{d._id}</TableCell>
                            <TableCell>{d.sum}</TableCell>
                            <TableCell><WrappedLink to={'/reports/onedate/' + d._id}>View Exercises</WrappedLink></TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
        </>}
    </>)
}

export default AllDates;