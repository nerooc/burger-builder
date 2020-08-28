import React from 'react';
import Auxilliary from '../../hoc/Auxilliary';

class BurgerBuilder extends React.Component {
    render(){
        return (
            <Auxilliary>
                <div> Burger </div>
                <div> Build Controls </div>
            </Auxilliary>
        );
    }
}

export default BurgerBuilder;