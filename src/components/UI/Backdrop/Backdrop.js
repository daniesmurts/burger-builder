import React from 'react';
import classes from '../../../css/Backdrop.module.css';

  const backdrop = (props) => (
    props.show ? <div className={classes.Backdrop} onClick={props.clicked}></div> : null
  );
    

export default backdrop;