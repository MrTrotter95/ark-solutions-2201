import React from "react";
import PermeableSurface from "./PermeableSurface";
import SiteCoverage from "./SiteCoverage";
import FloorJoist from "./Floors/FloorJoist";
import Bearers from "./Foundation/Bearers";


const Additional = () => {
    /*const print = () => {
        window.print();
    }*/

    return(
        <div className="container-xl">
            <h3 className="h2 fw-900 black">Additional Calculators</h3>
            <div className="flex-wrap">
                <PermeableSurface/>
                <SiteCoverage/>
                <FloorJoist/>
                <Bearers/>
            </div>
            {/* <div className="button-container">
                <button className="primary-button label" onClick={print}>Save To PDF</button>
            </div>
            */}
        </div>
        

        
    )
};

export default Additional;