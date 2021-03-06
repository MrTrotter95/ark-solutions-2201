import React from "react";
import CardSmallalt from "../../../components/CardSmallalt";

const RidgeBeams = () => {
    return (
        <div> 
            <h4 className="h5 pl-10 fw-900 black">Ridge Beams SG8</h4>
            <CardSmallalt>
                <div className="flex-row mb-20">
                    <p className="body black">Roof Weight</p>
                    <select className="select-sm label dark-gray">n
                        <option value="Light">Light</option>
                        <option value="Heavy">Heavy</option>
                    </select>
                </div>
                <div className="flex-row mb-20">
                    <p className="body black">Loaded Dimension Of Beam</p>
                    <select className="select-sm label dark-gray">
                        <option value="1.8">1.8</option>
                        <option value="2.7">2.7</option>
                        <option value="3.6">3.6</option>
                        <option value="4.2">4.2</option>
                    </select>
                </div>
                <div className="flex-row mb-20">
                    <p className="body black">Desired Beam Size</p>
                    <select className="select-sm label dark-gray">
                        <option value="240x45">240x45mm</option>
                        <option value="290x45">290x45mm</option>
                        <option value="190x90">190x90mm</option>
                        <option value="240x90">240x90mm</option>
                        <option value="290x90">290x90mm</option>
                    </select>
                </div>
                <div className="mb-20 mt-30">
                    <h5 className="h5-0mg fw-900 black mb-10">Maximum Span: <span className="h5-0mg fw-900 bright-blue mb-10">5.0m</span> </h5>
                    <h5 className="h5-0mg fw-900 black mb-10">Required Fixing Type: <span className="h5-0mg fw-900 bright-blue mb-10">I</span> </h5>
                </div>
                <div className="mb-30">
                    <p className="label black fw-800">Base connection for built-up studs</p>
                    <p className="label black">2 / 25 x 1 straps with 6 nails to stud and plate. 24 nails total</p>
                    <p className="label black fw-800 mt-10">Ridge beam to built-up studs</p>
                    <p className="label black">2 / M12 Bolts</p>
                    <p className="label black fw-800 mt-10">Alternate fixing capacity (kN)</p>
                    <p className="label black">16.0</p>
                </div>
                <p className="label black fw-800 mt-20">Note:</p>
                <p className="label black mt-10"><span className="label black fw-800">(1)</span> Fix plate to joist with 1/M12 x 150 coach screw.</p>
                <p className="label black mt-20"><span className="label black fw-800">(2)</span> Fix plate to joist with 2/M12 x 150 coach screw.</p>
                <p className="label black mt-20"><span className="label black fw-800">(3)</span> Strap nails to be 30 x 2.5mm</p>
            </CardSmallalt>
        </div>
    )
};

export default RidgeBeams;