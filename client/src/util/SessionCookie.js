import * as Cookies from 'js-cookie';

export const setSessionCookie = (session) => {
    Cookies.remove("session");    
    Cookies.set("session", session, {expires:1}); //"expires" value is number of days
}

export const getSessionCookie = () => {
    const sessionCookie = Cookies.get("session");

    if (sessionCookie === undefined) {
        return { };
    } else {
        return JSON.parse(sessionCookie);
    }
}