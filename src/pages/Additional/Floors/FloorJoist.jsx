import React from "react";
import CardSmallalt from "../../../components/CardSmallalt";

const FloorJoist = () => {
    return (
        <div>  
            <h4 className="h5 fw-900 black pl-10">Floor Joists SG8</h4>
            <CardSmallalt>
                <div className="flex-row">
                    <p className="body black">Floor Load</p>
                    <select className="select-sm label dark-gray">
                        <option value="1">1.5kPa</option>
                        <option value="2">2.0kPa</option>
                    </select>
                </div>
                <div className="flex-row mt-20 mb-20">
                    <p className="body black">Maximum Span (m)</p>
                    <input type="number" className="input-md label"></input>
                </div>
                <div className="flex-row">
                    <p className="body black">Desired Spacing</p>
                    <select className="select-sm label dark-gray">
                        <option value="450">450mm</option>
                        <option value="600">600mm</option>
                    </select>
                </div>
                <div className="mb-20">
                    <h5 className="h5-0mg fw-900 black mt-30 mb-10">Available Options</h5>
                    <h5 className="h5-0mg fw-900 bright-blue mb-10">240x45</h5>
                    <h5 className="h5-0mg fw-900 bright-blue mb-10">290x45</h5>
                </div>
                <p className="label black">Spans may be increased by 10% for joists
                continuous over 2 or more spans.</p>
            </CardSmallalt>
        </div>
    )
}

export default FloorJoist;