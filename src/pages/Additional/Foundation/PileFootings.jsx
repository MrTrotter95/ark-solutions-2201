import React from "react";
import CardSmallalt from "../../../components/CardSmallalt";

const PileFootings = () => {
    return(
        <div>
            <h4 className="h5 pl-10 blue fw-700">Pile Footings</h4>
            <CardSmallalt>
                <div>
                    <div className="flex-row mb-20">
                        <p className="body dark-gray">Bearer Span</p>
                        <select className="select-sm label" id="verandahRW">
                            <option value="1.3">1.3m</option>
                            <option value="1.65">1.65m</option>
                            <option value="2.0">2.0m</option>
                        </select>
                    </div>
                    <div className="flex-row mb-20">
                        <p className="body dark-gray">Joist Span</p>
                        <select className="select-sm label" id="verandahRW">
                            <option value="2.0">2.0m</option>
                            <option value="3.5">3.5m</option>
                            <option value="5.0">5.0m</option>
                            <option value="6.0">6.0m</option>
                        </select>
                    </div>
                </div>
            </CardSmallalt>
        </div>
    )
}

export default PileFootings;