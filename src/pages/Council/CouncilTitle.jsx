import React, {useState} from "react";
import CardSmall from "../../components/CardSmall";
import CouncilInfo from "./CouncilInfo";
import './Council.css';

import upArrow from "../../assets/images/icons/UpArrow.svg";
import downArrow from "../../assets/images/icons/DownArrow.svg"

const CouncilTitle = (props) => {
    const [arrow, setArrow] = useState(downArrow);
    const [wantInfo, setWantInfo] = useState(false);

    const wantInfoHandler = () => {
        if(wantInfo == true){
            setWantInfo(false);
            setArrow(downArrow);
        } else {
            setWantInfo(true);
            setArrow(upArrow);
        }
    }

    return (
        <CardSmall>
            <div>
                <div className="flex-row">
                    <h3 className="h4 secondary-black no-margin-title mb-0">{props.name}</h3>
                    <img className="add-remove-icon" src={arrow} onClick={wantInfoHandler} alt="Add"/>
                </div>

                {wantInfo &&               
                <CouncilInfo
                gis={props.gis}
                buildingConsent={props.buildingConsent}
                resourceConsent={props.resourceConsent}
                districtPlans={props.districtPlans}
                email={props.email}
                number={props.number}/>}
            </div>
        </CardSmall>

    )
}

export default CouncilTitle;