import React from 'react';
import ClearIcon from '@material-ui/icons/Clear';

const iconStyle = {
    fontSize: "medium",
    verticalAlign: "middle",    
}

export default (props) => {
    return (
        <ClearIcon style={iconStyle} color="secondary" onClick={props.action ?? false}/> 
    );
}