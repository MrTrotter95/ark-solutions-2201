import React from "react";
import CardSmallalt from "../../../components/CardSmallalt";

const Bearers = () => {
    return (
        <div>   
            <h4 className="h5 pl-10 fw-900 black">Bearers SG8</h4>
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
                <div className="mb-20 mt-30 flex-row">
                    <h5 className="h5-0mg fw-900 black mb-10">Allowed Bearer Size: </h5>
                    <h5 className="h5-0mg fw-900 bright-blue mb-10">140x70</h5>
                </div>
                <p className="label black">Note - Members 70mm and 90mm thick may be 
                substitutedwith built-up members sized and nailed in accordance with 2.4.4.7</p>
            </CardSmallalt>
        </div>
    )
}

export default Bearers;