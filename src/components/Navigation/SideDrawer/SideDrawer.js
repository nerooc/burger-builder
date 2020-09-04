import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxilliary from '../../../hoc/Auxilliary/Auxilliary';

import classes from './SideDrawer.module.css';

const sideDrawer = (props) => {
    const attachedClasses = [classes.SideDrawer, props.open ? classes.Open : classes.Close].join(' ');
    
    return (
        <Auxilliary>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Auxilliary>
    );
};

export default sideDrawer;