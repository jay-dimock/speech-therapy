import React from 'react';
import { FormControl, FormHelperText, TextField} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      '& > *': { margin: theme.spacing(1) }
    },
    helperText: {
        marginTop: "0", padding: "0"
    }
  }));

export default (props) => {
    const {labelText, fieldName, value, error, changeHandler} = props;
    const inputType = props.type ?? "text"

    const classes = useStyles();

    return (<>
        <FormControl className={classes.root}>
            <TextField 
                type={inputType} 
                label={labelText} 
                value={value} 
                onChange={(e) => changeHandler(fieldName, e.target.value)} 
                variant="filled" 
                error={error && true}/>
            {error && 
                <FormHelperText 
                    className={classes.helperText} 
                    error={true}>{error}
                </FormHelperText>}
        </FormControl><br/>
    </>)
}