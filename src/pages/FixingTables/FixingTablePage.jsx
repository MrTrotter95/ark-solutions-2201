import React from "react";
import LumberLok from "./LumberLok";
import Pryda from "./PrydaFixingTable";
import FixingTypes from "./FixingTypes";
import DurabilityFixings from "./DurabilityFixings";

const FixingTablePage = () => {
    return(
        <div className="container-xl">
            <h3 className="h2 --dark-gray fw-900">Fixing Tables</h3>
            <div className="flex-wrap">
                <LumberLok/>
                <Pryda/>
                <FixingTypes/>
                <DurabilityFixings/>
            </div>
        </div>
    )
}

export default FixingTablePage;