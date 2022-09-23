import React from "react";  
import './Council.css';

const CouncilInfo = (props) => {
    return (
        <div className="mt-20">
            <div>
                <div className="mb-40">
                    <h5 className="h5-0mg dt-white fw-700 mb-5">Links</h5>
                    <div className="flex-wrap column-gap-20 row-gap-20">
                        <a href={props.gis} className="label dt-blue fw-500 link">GIS Webmap</a>
                        <a href={props.buildingConsent} className="label dt-blue fw-500 link">Submit Building Consent</a>
                        <a href={props.resourceConsent} className="label dt-blue fw-500 link">Submit Resource Consent</a>
                        <a href={props.districtPlans} className="label dt-blue fw-500 link">District Plans</a>
                    </div>
                </div>
                
                <div>
                    <h5 className="h5-0mg dt-white fw-700 mb-5">Contact Info</h5>
                    <div className="display-flex">
                        <div className="mb-10">
                            <p className="subtitle dt-white fw-700">Email</p>
                            <p className="body dt-gray fw-600">{props.email}</p>
                        </div>
                        <div>
                            <p className="subtitle dt-white fw-700">Phone Number</p>
                            <p className="body dt-gray fw-600">{props.number}</p>
                        </div>

                    </div>
                </div>
               
            </div>
        </div>
    )
};

export default CouncilInfo;