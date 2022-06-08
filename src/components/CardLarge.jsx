import React from "react";
import './CardLarge.css';

const CardLarge = (props) => {
    const classes = 'card-large';
    return (
        <div className={classes}>
            {props.children}
        </div>
    )
};

export default CardLarge;