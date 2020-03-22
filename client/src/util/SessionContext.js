import React from 'react';
import {getSessionCookie} from './SessionCookie';


const MyContext = React.createContext(getSessionCookie());
export default MyContext;