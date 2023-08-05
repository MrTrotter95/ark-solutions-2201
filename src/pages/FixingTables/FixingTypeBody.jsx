import React from "react";

const FixingTypeBody = (props) => {
    return (
        <tr>
            <td className="table-md__data"><p className="body-bold fw-700">{props.type}</p></td>
            <td className="table-md__data"><p className="body dark-gray">{props.description}</p></td>
            <td className="table-md__data"><p className="body dark-gray">{props.alternate}</p></td>
        </tr>
    )
} 

export default FixingTypeBody;