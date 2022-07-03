import React from "react";
import WindowRowTwo from "./WindowRowTwo";

const TBodyTwo = (props) => {
    const saveRowDataHandler = (enteredRowData) => {
        const rowOneData = {
            ...enteredRowData,
        }
        props.onUpdateRowTwo(rowOneData);
    }

    return(
        <tbody>
            {props.items.map((item) => (
                <WindowRowTwo
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

export default TBodyTwo;
