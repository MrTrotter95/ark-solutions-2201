import React, {useEffect, useState} from "react";
import './ScheduleMethod.css';

const WindowRowOne = (props) => {
    const [rowOneArea, setRowOneArea] = useState(props.area);
    const [enteredHeight, setEnteredHeight] = useState(props.height);
    const [enteredWidth, setEnteredWidth] = useState(props.width);

    //On first Render + Whenever a dependancy changes
    useEffect(() => {
        const rowResult = enteredHeight * enteredWidth;
        setRowOneArea(rowResult);
        console.log(`the area changed!: ${rowResult}`)
    }, [enteredHeight, enteredWidth, rowOneArea])

    const heightChangeHandler = (event) => {
        setEnteredHeight(event.target.value);
    }

    const widthChangeHandler = (event) => {
        setEnteredWidth(event.target.value);
    }

    return(
        <tr className="table-data-1" id="tableDataOne">
            <td><input type="text" defaultValue={props.joineryId} className="input-sm__window label__window "/></td>
            <td><input type="number" defaultValue={enteredHeight} onChange={heightChangeHandler} className="input-sm__window label__window " id="rowHeight"/></td>
            <td><input type="number" defaultValue={enteredWidth} onChange={widthChangeHandler} className="input-sm__window label__window " id="rowWidth" /></td>
            <td><h5 className="text-center h5-0mg light-blue rowAreaResult" id="rowArea">{rowOneArea}</h5></td>
        </tr>
    )
}

export default WindowRowOne;