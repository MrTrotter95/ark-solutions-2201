import React from "react";
import WindowRowOne from "./WindowRowOne";

const TBodyOne = (props) => {
    return(
        <tbody>
            {props.items.map((item) => (
                <WindowRowOne
                joineryId={item.joineryId}
                height={item.height}
                width={item.width}
                area={item.area}/>
            ))}
        </tbody>
    )
};

export default TBodyOne;
