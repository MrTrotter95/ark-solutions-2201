import React from "react";
import './CardMedium.css';

const CardMedium = (props) => {
    return (
        <div className="card-medium">
            {props.children}
        </div>
    )
};

export default CardMedium;