import React from "react";
import './CardSmall.css';

const CardSmall = (props) => {
    return (
        <div className="card-small">
            {props.children}
        </div>
    )
};

export default CardSmall;