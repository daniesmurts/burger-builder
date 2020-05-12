import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Button from '../UI/Button';


class OrderSummary extends Component {

  componentDidUpdate() {
    console.log( 'order summary updated')
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(ingKey => {
      return <li key={ingKey}>
      <span styles={{textTransform: 'capitalize'}}>{ingKey}</span>: {this.props.ingredients[ingKey]} 
      </li>
    })
    return(
      <Aux>
        <h3>Your Order</h3>
        <p>Your Burger has the following ingredients</p>
        <ul>
          {ingredientSummary}
        </ul>
        <p><strong>Total Price: {this.props.price.toFixed(2)} </strong></p>
        <p>Continue to checkout</p>
        <Button
          btnType="Danger" clicked={this.props.purchaseCanceled} >CANCEL</Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued} >CONTINUE</Button>
      </Aux>
    );
  }
};

export default OrderSummary;