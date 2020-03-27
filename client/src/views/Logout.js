import React, {useContext, useEffect} from 'react';
import SessionContext from '../util/SessionContext';
import { Redirect } from '@reach/router'

export default () => {
    const context = useContext(SessionContext);
    
    useEffect(() => {        
        context.setSession({ theme: context.session.theme });
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    return <Redirect noThrow to="/login" />
}
