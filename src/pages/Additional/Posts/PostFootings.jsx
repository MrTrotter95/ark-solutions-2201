import React, {useState} from "react";
import CardSmallalt from "../../../components/CardSmallalt";

const PostFootings = () => {
    const [volumeOfConcrete, setVolumeOfConcrete] = useState(0.02);
    
    const pcfVolumeArr = [
        [
            ["roof",          1,    2,    4,    6,    8,   10,   12],
            ["extra-high", 0.09, 0.16, 0.32, 0.49, 0.61, 0.79, 1.00],
            ["very-high",  0.07, 0.13, 0.26, 0.40, 0.50, 0.65, 0.80],
            ["high",       0.05, 0.10, 0.20, 0.30, 0.40, 0.50, 0.60],
            ["medium",     0.03, 0.05, 0.10, 0.15, 0.20, 0.25, 0.30],
            ["low",        0.02, 0.03, 0.07, 0.10, 0.15, 0.15, 0.20]
        ], 
        [
            ["extra-high", 0.05, 0.09, 0.16, 0.25, 0.32, 0.39, 0.49],
            ["very-high",  0.04, 0.07, 0.13, 0.20, 0.26, 0.32, 0.40],
            ["high",       0.03, 0.05, 0.10, 0.15, 0.20, 0.25, 0.30],
            ["medium",        0,    0,    0,    0,    0,    0,    0,],
            ["low",           0,    0,    0,    0,    0,    0,    0,]
        ]
    ]

    const pcfHandler = () => {
        const pcfRoofWeight = document.querySelector('#pcfRoofWeight').value;
        const pcfWindZone = document.querySelector('#pcfWindZone').value;
        const pcfRoofSupport = document.querySelector('#pcfRoofSupport').value;

            if(pcfRoofWeight == "light") {
                for(let i = 0; i < 6; i++) {
                    if(pcfWindZone == pcfVolumeArr[0][i][0]) {
                        for(let j = 1; j < 8; j++) {
                            if(pcfRoofSupport == pcfVolumeArr[0][0][j]) {
                                setVolumeOfConcrete(pcfVolumeArr[0][i][j].toFixed(2));
                                break;
                            }
                        }
                    }
                }
            } else if(pcfRoofWeight == "heavy") {
                for(let i = 0; i < 5; i++) {
                    if(pcfWindZone == pcfVolumeArr[1][i][0]) {
                        for(let j = 1; j < 8; j++) {
                            if(pcfRoofSupport == pcfVolumeArr[0][0][j]) {
                                setVolumeOfConcrete(pcfVolumeArr[1][i][j].toFixed(2));
                                break;
                            }
                        }
                    }
                }
            }
    }


    return (
        <div>
            <h4 className="h5 pl-10 blue fw-700">Post Concrete Footings</h4>
            <CardSmallalt>
                <div onChange={pcfHandler}>
                    <div className="flex-row  mb-20">
                        <p className="body dark-gray">Roof Type</p>
                        <select className="select-sm label" id="pcfRoofWeight">
                            <option value="light">Light</option>
                            <option value="heavy">Heavy</option>
                        </select>
                    </div>
                    <div className="flex-row mb-20">
                        <p className="body dark-gray">Wind Zone</p>
                        <select className="select-sm label" id="pcfWindZone">
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                            <option value="very-high">Very High</option>
                            <option value="extra-high">Extra High</option>
                        </select>
                    </div>
                    <div className="flex-row mb-20">
                        <p className="body dark-gray">Area of supported roof</p>
                        <select className="select-sm label" id="pcfRoofSupport">
                            <option value="1">1m²</option>
                            <option value="2">2m²</option>
                            <option value="4">4m²</option>
                            <option value="6">6m²</option>
                            <option value="8">8m²</option>
                            <option value="10">10m²</option>
                            <option value="12">12m²</option>
                        </select>
                    </div>
                </div>

                <div className="mb-20 mt-30">
                    <h5 className="h5-0mg fw-700 mb-10">Volume of Concrete: <span className="result-text_md blue fw-800 ml-10 mb-10">{volumeOfConcrete}m³</span> </h5>
                </div>
            </CardSmallalt>
        </div>
    )
};

export default PostFootings;