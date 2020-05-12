import React from 'react';
import classes from '../../css/ToolBar.module.css';
import Logo from '../UI/Logo';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';
import DrawerToggle from '../Navigation/SideDrawer/DrawerToggle';



const toolbar = (props) => {
return (
    <header className={classes.Toolbar}>
        <DrawerToggle
            clicked={props.drawerToggleClicked}
        />
        <Logo height="80%"/>
        <nav className={classes.DesktopOnly}>
            <NavigationItems/>
        </nav>
    </header>
);
};
export default toolbar;