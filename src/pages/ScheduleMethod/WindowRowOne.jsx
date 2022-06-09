import React, {useEffect, useState} from "react";
import './ScheduleMethod.css';

const WindowRowOne = (props) => {
    const [enteredjoineryId, setEnteredJoineryId] = useState(props.joineryId);
    const [enteredHeight, setEnteredHeight] = useState(props.height);
    const [enteredWidth, setEnteredWidth] = useState(props.width);
    const [rowOneArea, setRowOneArea] = useState(props.area);

    //On first Render + Whenever a dependancy changes
    //I used this useEffect Hook as work around to have the Area be up to date
    //I tried a onChange event on the <tr> to display the Area, however it was one step back.
    useEffect(() => {
        const rowResult = enteredHeight * enteredWidth;
        setRowOneArea(rowResult);
        console.log(`the area changed!: ${rowResult}`)
    }, [enteredHeight, enteredWidth, rowOneArea]) //Triggered after one of these updates.

    const joineryIdHandler = (event) => {
        setEnteredJoineryId(event.target.value);
    }

    const heightChangeHandler = (event) => {
        setEnteredHeight(event.target.value);
    }

    const widthChangeHandler = (event) => {
        setEnteredWidth(event.target.value);
    }


    
    return(
        <tr className="table-data-1" id="tableDataOne">
            <td><input type="text" defaultValue={enteredjoineryId} onChange={joineryIdHandler} className="input-sm__window label__window "/></td>
            <td><input type="number" defaultValue={enteredHeight} onChange={heightChangeHandler} className="input-sm__window label__window " id="rowHeight"/></td>
            <td><input type="number" defaultValue={enteredWidth} onChange={widthChangeHandler} className="input-sm__window label__window " id="rowWidth" /></td>
            <td><h5 className="text-center h5-0mg light-blue rowAreaResult" id="rowArea">{rowOneArea}</h5></td>
        </tr>
    )
}

export default WindowRowOne;