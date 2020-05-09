import React from 'react';
import classes from '../../../css/BuildControls.module.css';
import Control from '../BuildControls/Controls/Control';

const controls = [
    { label: 'Salad', Type: 'salad'},
    { label: 'Bacon', Type: 'bacon'},
    { label: 'Cheese', Type: 'cheese'},
    { label: 'Meat', Type: 'meat'},
];

const BuildControls = (props) => {
    return(
        <div className={classes.BuildControls}>
        <p>Current Price: $<strong>{props.price.toFixed(2)}</strong></p>
            {controls.map(ctrl => (
                <Control 
                key={ctrl.label} 
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.Type)}
                removed={() => props.ingredientRemoved(ctrl.Type)}
                disabled={props.disabled[ctrl.Type]}
                />
            ))}
            <button 
            className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered}
            > ORDER NOW </button>
        </div>
    )
};
export default BuildControls;