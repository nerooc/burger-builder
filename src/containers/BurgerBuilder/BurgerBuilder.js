import React from 'react';
import Auxilliary from '../../hoc/Auxilliary';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends React.Component {
    render(){
        return (
            <Auxilliary>
                <Burger />
                <div> Build Controls </div>
            </Auxilliary>
        );
    }
}

export default BurgerBuilder;