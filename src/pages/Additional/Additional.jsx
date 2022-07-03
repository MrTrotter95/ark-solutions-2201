import React from "react";
import PermeableSurface from "./PermeableSurface";
import SiteCoverage from "./SiteCoverage";

const Additional = () => {
    const print = () => {
        window.print();
    }

    return(
        <div className="container-lg">
            <h3 className="h3 additional-text">Additional Calculators</h3>
            <div className="flex-wrap">
            <PermeableSurface/>
            <SiteCoverage/>
            </div>
            <div className="button-container">
                <button className="primary-button label" onClick={print}>Save To PDF</button>
            </div>
        </div>
        
    )
};

export default Additional;