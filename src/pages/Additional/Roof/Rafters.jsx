import React from "react";
import CardSmallalt from "../../../components/CardSmallalt";

const Rafters = () => {
    return (
        <div>
            <h4 className="h5 pl-10 fw-900 black">Rafters SG8</h4>
            <CardSmallalt>
                <div className="flex-row mb-20">
                    <p className="body black">Wind Zone</p>
                    <select className="select-sm label dark-gray">n
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                        <option value="very-high">Very High</option>
                        <option value="extra-high">Extra High</option>
                    </select>
                </div>
                <div className="flex-row mb-20">
                    <p className="body black">Desired Rafter Size</p>
                    <select className="select-sm label dark-gray">
                        <option value="90x45">90x45mm</option>
                        <option value="140x45">140x45mm</option>
                        <option value="190x45">190x45mm</option>
                        <option value="240x45">240x45mm</option>
                        <option value="290x45">290x45mm</option>
                        <option value="90x45">90x45mm</option>
                        <option value="140x90">140x90mm</option>
                        <option value="190x90">190x90mm</option>
                        <option value="240x90">240x90mm</option>
                        <option value="290x90">290x90mm</option>
                    </select>
                </div>
                <div className="flex-row mb-20">
                    <p className="body black">Desired Rafter Spacing</p>
                    <select className="select-sm label dark-gray">
                        <option value="480">480mm</option>
                        <option value="600">600mm</option>
                        <option value="900">900mm</option>
                        <option value="1200">1200mm</option>
                    </select>
                </div>
                <div className="mt-30">
                    <h5 className="h5-0mg fw-900 black mb-10">Maximum Span: <span className="h5-0mg fw-900 bright-blue mb-10">5.8m</span> </h5>
                    <h5 className="h5-0mg fw-900 black mb-10">Required Fixing Type: <span className="h5-0mg fw-900 bright-blue mb-10">F</span> </h5>
                </div>
                <div>
                    <h5 className="h5-0mg fw-900 black mb-10">Fixing Types</h5>
                    <table className="table-sm text-center">
                        <thead>
                            <tr>
                                <th><p className="label__window fw-800">Fixing Type</p></th>
                                <th><p className="label__window fw-800">Description</p></th>
                                <th><p className="label__window fw-800">Alternate Fixing Capacity (kN)</p></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><p className="label__window black">E</p></td>
                                <td><p className="label__window black">2/90 x 3.15 skew nails + 2 wire dogs</p></td>
                                <td><p className="label__window black">4.7</p></td>
                            </tr>
                            <tr>
                                <td><p className="label__window black">F</p></td>
                                <td><p className="label__window black">2/90 x 3.15 skew nails + strap fixing</p></td>
                                <td><p className="label__window black">7.0</p></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className="label black fw-800 mt-20">Note:</p>
                <p className="label black mt-10"><span className="label black fw-800">(1)</span> Rafter spans may be increased by 10% 
                for raters continuous over 2 or more spans that have not been birdsmouth jointed at intermediate supports.</p>
                <p className="label black mt-20"><span className="label black fw-800">(2)</span> Fixing types at intermediate supports for raters 
                running continuously over those supports shall have double the capacity of the fixing types given in this table.</p>
                <p className="label black mt-20"><span className="label black fw-800">(3)</span> Members 90mm thick may be substituted with built-up 
                members sized and nailed in accordance with 2.4.4.7 of 3604:2011.</p>
                <p className="label black mt-20"><span className="label black fw-800">(4)</span> Rafter spacing of 1200mm does no include heavy roofs.</p>
            </CardSmallalt>
        </div>
    )
};

export default Rafters;