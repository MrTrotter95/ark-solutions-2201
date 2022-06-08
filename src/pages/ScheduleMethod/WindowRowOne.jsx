import React from "react";
import './ScheduleMethod.css';

const WindowRowOne = (props) => {
    const calculateRowOneHandler = () => {
        
    }

    return(
        <tr className="table-data-1" id="tableDataOne" onChange={calculateRowOneHandler}>
            <td><input type="text" defaultValue={props.joineryId} className="input-sm__window label__window "/></td>
            <td><input type="number" defaultValue={props.height} className="input-sm__window label__window " id=""/></td>
            <td><input type="number" defaultValue={props.width} className="input-sm__window label__window " id=""/></td>
            <td><input type="number" defaultValue={props.area} className="input-sm__window label__window " id=""/></td>
        </tr>
    )
}

export default WindowRowOne;