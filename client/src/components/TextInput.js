import React from 'react';
import { FormControl, FormHelperText, TextField} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      '& > *': { margin: theme.spacing(1) }
    },
    helperText: {
        marginTop: "0"
    }
  }));

export default (props) => {
    const {labelText, fieldName, value, errors} = props;
    const inputType = props.type ?? "text"

    const changeHandler = e => {
        e.preventDefault();
        props.changeHandler(fieldName, e.target.value);
    }

    const classes = useStyles();

    return (<>
        <FormControl className={classes.root}>
            <TextField 
                type={inputType} 
                label={labelText} 
                value={value} 
                onChange={changeHandler} 
                variant="filled" 
                error={errors[fieldName] && true}/>
            {errors[fieldName] && 
                <FormHelperText 
                    className={classes.helperText} 
                    error={true}>{errors[fieldName]}
                </FormHelperText>}
        </FormControl><br/>
    </>)
}