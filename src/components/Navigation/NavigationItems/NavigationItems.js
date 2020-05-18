import React from 'react';
import classes from '../../../css/NavigationItems.module.css';
import NavigationItem from './NavigationItem';

const NavigationItems = () => {
return(
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/">Home</NavigationItem>
        <NavigationItem link="/orders">Orders</NavigationItem>
    </ul>
)
};
export default NavigationItems;