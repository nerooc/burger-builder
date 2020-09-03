import React from 'react';
import Auxilliary from '../../../hoc/Auxilliary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object
        .keys(props.ingredients)
        .map((igKey) => {
            return <li key = {igKey}>
                <span
                    style={{
                    textTransform: 'capitalize'
                }}>{igKey}</span>: {props.ingredients[igKey]}</li>

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
                Total: {props.price.toFixed(2)}$
            </p>

            <p>
                Continue to checkout?
            </p>

            <Button clicked={props.purchaseCanceled} btnType="Danger">
                CANCEL
            </Button>

            <Button clicked={props.purchaseContinued} btnType="Success">
                CONTINUE
            </Button>
        </Auxilliary>
    );
};

export default orderSummary;