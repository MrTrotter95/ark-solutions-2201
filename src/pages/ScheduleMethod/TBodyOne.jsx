import React from "react";
import WindowRowOne from "./WindowRowOne";

const TBodyOne = (props) => {
    const saveRowDataHandler = (enteredRowData) => {
        const rowOneData = {
            ...enteredRowData,
        }
        props.onUpdateRowOne(rowOneData);
    }

    return(
        <tbody>
            {props.items.map((item) => (
                <WindowRowOne
                id={item.id}
                joineryId={item.joineryId}
                height={item.height}
                width={item.width}
                area={item.area}
                saveRowData={saveRowDataHandler}
                />
            ))}
        </tbody>
    )
};

export default TBodyOne;
