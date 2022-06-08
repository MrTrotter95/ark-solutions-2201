import React from "react";
import PermeableSurface from "./PermeableSurface";
import SiteCoverage from "./SiteCoverage";

const Additional = () => {
    return(
        <div className="container-lg flex-wrap">
            <PermeableSurface/>
            <SiteCoverage/>
        </div>
        
    )
};

export default Additional;