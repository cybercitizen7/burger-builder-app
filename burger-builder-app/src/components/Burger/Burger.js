import React from 'react';

import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    // Create array from the keys of an ingredients props that we passed
    const transformedIngredients = Object.keys(props.ingredients)
        // Now we have array like ['salad', 'cheese', 'bacon]
        // Map will execute for each item in array, hence Ill name it ingredientKey or igKey
        .map(igKey => {
            // I now return a new array, which will have that many items, as there are ingredients of each type, e.g. ['salad', 'cheese', 'meat', 'meat']
            // Array(length) --> props.ingredients[igKey] will return the value of the current ingredient, e.g. 2, which defines the lenght of thew new Array I create
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                // we finally return the BurgerIngredient that many items as it is the length of the array
                // the type is the ingredientKey hence this is passed as Object to this component in the props
                return <BurgerIngredient key={igKey + i} type={igKey} />;
            });
        });

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;