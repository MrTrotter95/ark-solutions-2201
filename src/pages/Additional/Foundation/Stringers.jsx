import React from "react";
import CardSmallalt from "../../../components/CardSmallalt";

const Stringers = () => {
    return (
        <div>
            <h4 className="h5 pl-10 fw-900 black">Stringers SG8</h4>
            <CardSmallalt>
                <div className="flex-row">
                    <p className="body black">Max Span Of Floor Joists</p>
                    <select className="select-sm label dark-gray">
                        <option value="2">2.0m</option>
                        <option value="3">3.0m</option>
                        <option value="4">4.0m</option>
                        <option value="5">5.0m</option>
                        <option value="6">6.0m</option>
                    </select>
                </div>
                <div className="mt-30">
                    <h5 className="h5-0mg fw-900 black mb-10">Available Options</h5>
                    <table className="table-sm text-center">
                        <thead>
                            <tr>
                                <th><p className="label__window fw-800">Size Nominal (mm)</p></th>
                                <th><p className="label__window fw-800">Max M12 bolt spacing (mm)</p></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><p className="body bright-blue fw-800">140x45</p></td>
                                <td><p className="body bright-blue fw-800">1200</p></td>
                            </tr>
                            <tr>
                                <td><p className="body bright-blue fw-800">190x45</p></td>
                                <td><p className="body bright-blue fw-800">1200</p></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </CardSmallalt>
        </div>
    )
};

export default Stringers;