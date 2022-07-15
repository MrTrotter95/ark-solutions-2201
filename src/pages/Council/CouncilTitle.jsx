import React from "react";
import CardSmallalt from "../../components/CardSmallalt";
import CouncilInfo from "./CouncilInfo";
import './Council.css';

const CouncilTitle = (props) => {

    return (
        <CardSmallalt>
            <div>
                <div className="flex-row">
                    <h3 className="h3-0mg black fw-900">{props.name}</h3>
                </div>           
                <CouncilInfo
                gis={props.gis}
                buildingConsent={props.buildingConsent}
                resourceConsent={props.resourceConsent}
                districtPlans={props.districtPlans}
                email={props.email}
                number={props.number}/>
            </div>
        </CardSmallalt>

    )
}

export default CouncilTitle;