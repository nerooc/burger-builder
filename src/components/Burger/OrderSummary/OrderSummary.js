import React from 'react';
import Auxilliary from '../../../hoc/Auxilliary/Auxilliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends React.Component {
    /* this could/should be a functional component */
    render(){
        const ingredientSummary = Object
            .keys(this.props.ingredients)
            .map((igKey) => {
                return <li key = {igKey}>
                    <span
                        style={{
                        textTransform: 'capitalize'
                    }}>{igKey}</span>: {this.props.ingredients[igKey]}</li>

            });

        return (
            <Auxilliary>
                <h3>
                    Your Order
                </h3>

                <p>
                    A delicious burger with the following ingredients:
                </p>

                <ul>
                    {ingredientSummary}
                </ul>

                <p>
                    Total: {this.props.price.toFixed(2)}$
                </p>

                <p>
                    Continue to checkout?
                </p>

                <Button clicked={this.props.purchaseCanceled} btnType="Danger">
                    CANCEL
                </Button>

                <Button clicked={this.props.purchaseContinued} btnType="Success">
                    CONTINUE
                </Button>
            </Auxilliary>
        
        );
    }
    
};
    
export default OrderSummary;