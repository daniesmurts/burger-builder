import React from 'react';
import Aux from '../../hoc/Aux';


const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map(ingKey => {
    return <li key={ingKey}>
    <span styles={{textTransform: 'capitalize'}}>{ingKey}</span>: {props.ingredients[ingKey]} 
    </li>
  })

  return(
      <Aux>
        <h3>Your Order</h3>
      <p>Your Burger has the following ingredients</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Continue to checkout</p>
      </Aux>
  )
};
export default orderSummary;