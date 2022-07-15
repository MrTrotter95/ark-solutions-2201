import React, {useState, useEffect} from "react";
import './ScheduleMethod.css';

const WindowRowOne = (props) => {
    
    const [enteredjoineryId, setEnteredJoineryId] = useState(props.joineryId);
    const [enteredHeight, setEnteredHeight] = useState(props.height);
    const [enteredWidth, setEnteredWidth] = useState(props.width);
    const [windowArea, setWindowArea] = useState(props.area);

    //--- On Every Render ---//
    useEffect(() => {
    });

    //--- ON First Render/Mount Only ---//
    useEffect(() => {
    }, [])

    useEffect(() => {
        const windowAreaResult = enteredHeight * enteredWidth;
        setWindowArea(windowAreaResult.toFixed(2));

        const rowData = {
            id: props.id,
            joineryId: enteredjoineryId,
            height: enteredHeight,
            width: enteredWidth,
            area: windowAreaResult
        }
        props.saveRowData(rowData);

    }, [enteredjoineryId, enteredHeight, enteredWidth, props])

    const joineryIdHandler = (event) => {
        setEnteredJoineryId(event.target.value);
    }

    const heightChangeHandler = (event) => {
        setEnteredHeight(event.target.value);
    }


    const widthChangeHandler = (event) => {
        setEnteredWidth(event.target.value);
    }

    return (
        <tr className="table-data-1" id="tableDataOne">
            <td><input type="text" defaultValue={enteredjoineryId} onChange={joineryIdHandler} className="input-sm__window label__window "/></td>
            <td><input type="number" defaultValue={enteredHeight} onChange={heightChangeHandler} className="input-sm__window label__window " id="rowHeight"/></td>
            <td><input type="number" defaultValue={enteredWidth} onChange={widthChangeHandler} className="input-sm__window label__window " id="rowWidth" /></td>
            <td><h5 className="text-center h5-0mg bright-blue rowAreaResult" id="rowArea">{windowArea}</h5></td>
        </tr>
    )
}

export default WindowRowOne;