import React from 'react';
import classes from '../../../../css/Control.module.css'

const Control = (props) => {
    return(
        <div className={classes.Control}>
            <div className={classes.Label}>{props.label}</div>
            <button 
            className={classes.Remove} 
            onClick={props.removed}
            disabled={props.disabled}
            >
            Remove
            </button>
            <button className={classes.Add} onClick={props.added}>Add</button>
        </div>
    )
};
export default Control;