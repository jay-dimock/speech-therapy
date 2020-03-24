import React from 'react';

export default () => {
    //this doesn't work yet. need to research transpile to ES5 via Babel.
    return (<div className="container"><h3>
        This browser is using an older version of JavaScript which is not compatible 
        with this site (or JavaScript is disabled). The site will not work properly.
    </h3></div>);
}