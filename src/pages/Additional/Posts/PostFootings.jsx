import React from "react";
import CardSmallalt from "../../../components/CardSmallalt";

const PostFootings = () => {
    return (
        <div>
            <h4 className="h5 pl-10 fw-900 black">Post Concrete Footings</h4>
            <CardSmallalt>
                <div className="flex-row  mb-20">
                    <p className="body black">Roof Type</p>
                    <select className="select-sm label dark-gray">
                        <option value="light">Light</option>
                        <option value="heavy">Heavy</option>
                    </select>
                </div>
                <div className="flex-row mb-20">
                    <p className="body black">Wind Zone</p>
                    <select className="select-sm label dark-gray">
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                        <option value="very-high">Very High</option>
                        <option value="extra-high">Extra High</option>
                    </select>
                </div>
                <div className="flex-row mb-20">
                    <p className="body black">Area of supported roof</p>
                    <select className="select-sm label dark-gray">
                        <option value="1">1m²</option>
                        <option value="2">2m²</option>
                        <option value="4">4m²</option>
                        <option value="6">6m²</option>
                        <option value="8">8m²</option>
                        <option value="10">10m²</option>
                        <option value="12">12m²</option>
                    </select>
                </div>
                <div className="mb-20 mt-30">
                    <h5 className="h5-0mg fw-900 black mb-10">Volume of Concrete: <span className="h5-0mg fw-900 bright-blue mb-10">0.26m³</span> </h5>
                </div>
            </CardSmallalt>
        </div>
    )
};

export default PostFootings;