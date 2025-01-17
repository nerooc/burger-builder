import React from 'react';
import Aux from '../Auxilliary/Auxilliary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import classes from './Layout.module.css';

class Layout extends React.Component{

    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer:false});
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer }
        }
        );
    }

    render(){
        return(
            <Aux>
                <Toolbar toggle = {this.sideDrawerToggleHandler} />
                <SideDrawer open = {this.state.showSideDrawer} closed = {this.sideDrawerClosedHandler} />
                <main className = {classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
};

export default Layout;