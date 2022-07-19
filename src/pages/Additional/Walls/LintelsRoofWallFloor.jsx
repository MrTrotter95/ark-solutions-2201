import React from "react";
import CardSmallalt from "../../../components/CardSmallalt";

const LintelsRoofWallFloor = () => {
    return (
        <div>
            <h4 className="h5 pl-10 fw-900 black">Lintels Supporting Roof, Wall & Floor SG8</h4>
            <CardSmallalt>
                <div className="flex-row mb-20">
                    <p className="body black">Max Lintel Span (mm)</p>
                    <input type="number" className="input-md label"></input>
                </div>
                <div className="flex-row mb-20">
                    <p className="body black">Roof & Wall Weight</p>
                    <select className="select-md label dark-gray select-overflow select-height" style={{width: 140}}>
                        <option value="LRLW">Light Roof & Light Wall</option>
                        <option value="LRMW">Light Roof & Medium Wall</option>
                        <option value="HRLW">Heavy Roof & Light Wall</option>
                        <option value="HRMW">Heavy Roof & Medium Wall</option>
                    </select>
                </div>
                <div className="flex-row">
                    <p className="body black">Max Loaded Dimenion of Lintel (m)</p>
                    <select className="select-md label dark-gray">
                        <option value="2">2.0m</option>
                        <option value="3">3.0m</option>
                        <option value="4">4.0m</option>
                        <option value="6">6.0m</option>
                    </select>
                </div>
                <div className="mb-20 mt-30 flex-row">
                    <h5 className="h5-0mg fw-900 black mb-10">Allowed Lintel Size: </h5>
                    <h5 className="h5-0mg fw-900 bright-blue mb-10">240x90</h5>
                </div>
                <p className="label black fw-800 mt-20">Note:</p>
                <p className="label black mt-10"><span className="label black fw-800">(1)</span> Determine the loaded dimension of the Wall
                above the lintel at roof level and use this value in the table.</p>
                <p className="label black mt-10"><span className="label black fw-800">(2)</span> Members 70mm and 90mm thick may be 
                substitutedwith built-up members sized and nailed in accordance with 2.4.4.7</p>

            </CardSmallalt>
        </div>
    )
};

export default LintelsRoofWallFloor;