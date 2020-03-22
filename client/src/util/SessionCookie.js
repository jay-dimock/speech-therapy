import * as Cookies from 'js-cookie';

export const setSessionCookie = (session) => {
    //console.log("Session being set to:", session);
    Cookies.remove("session");    
    Cookies.set("session", session, {expires:1}); //"expires" value is number of days
}

export const getSessionCookie = () => {
    const sessionCookie = Cookies.get("session");

    if (sessionCookie === undefined) {
        //console.log("session is empty");
        return {};
    } else {
        //console.log("Retreiving session cookie: ", JSON.parse(sessionCookie));
        return JSON.parse(sessionCookie);
    }
}