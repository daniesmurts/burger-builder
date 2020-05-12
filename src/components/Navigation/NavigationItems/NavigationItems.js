import React from 'react';
import classes from '../../../css/NavigationItems.module.css';
import NavigationItem from './NavigationItem';

const NavigationItems = () => {
return(
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active>Home</NavigationItem>
        <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
)
};
export default NavigationItems;