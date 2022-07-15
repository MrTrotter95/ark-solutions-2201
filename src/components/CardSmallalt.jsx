import React from "react";
import './CardSmall.css';

const CardSmallalt = (props) => {
    return (
        <div className="card-small__alt">
            {props.children}
        </div>
    )
};

export default CardSmallalt;