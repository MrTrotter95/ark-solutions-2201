import React from "react";  
import './Council.css';

const CouncilInfo = (props) => {
    return (
        <div className="mt-30">
            <div>
                <div className="mb-40">
                    <h5 className="h4 secondary-black no-margin-title mb-10">Links</h5>
                    <div className="flex-wrap column-gap-20 row-gap-20">
                        <a href={props.gis} className="label-large bold link-large">GIS Webmap</a>
                        <a href={props.buildingConsent} className="label-large bold link-large">Submit Building Consent</a>
                        <a href={props.resourceConsent} className="label-large bold link-large">Submit Resource Consent</a>
                        <a href={props.districtPlans} className="label-large bold link-large">District Plans</a>
                    </div>
                </div>
                
                <div>
                    <h5 className="h4 secondary-black no-margin-title mb-10">Contact Info</h5>
                    <div>
                        <div className="mb-10">
                            <p className="body bold blue">Email</p>
                            <p className="body black">{props.email}</p>
                        </div>
                        <div>
                            <p className="body bold blue">Phone Number</p>
                            <p className="body black">{props.number}</p>
                        </div>

                    </div>
                </div>
               
            </div>
        </div>
    )
};

export default CouncilInfo;