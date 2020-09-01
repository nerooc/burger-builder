import React, {Component} from 'react';

import classes from './Modal.module.css';
import Auxilliary from '../../../hoc/Auxilliary';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

    render() {
        return (
            <Auxilliary>
                <div className={classes.Modal}>
                    {this.props.children}
                </div>
            </Auxilliary>
        )
    }
}

export default Modal;