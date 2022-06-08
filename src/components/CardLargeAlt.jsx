import React from "react";
import './CardLargeAlt.css';

const CardLargeAlt = (props) => {
    const classes = 'card-large-alt';
    return (
        <div className={classes}>
            {props.children}
        </div>
    )
};

export default CardLargeAlt;