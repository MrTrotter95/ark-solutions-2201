import React, {useState} from "react";
import CardSmallalt from "../../../components/CardSmallalt";

const ConnectionToPost = () => {
    const [connectionStrength, setConnectionStrength] = useState(0.7);

    const ctpArr = [
        [
            ["roof area ->", 1,   2,   4,    6,    8,   10,   12],
            ["extra-high", 2.5, 4.9, 9.6, 14.4, 19.2, 24.0, 28.8],
            ["very-high",  2.0, 4.0, 7.9, 11.9, 15.8, 19.8, 23.8],
            ["high",       1.5, 2.9, 5.9,  8.8, 11.8, 14.7, 17.7],
            ["medium",     1.0, 1.9, 3.8,  5.8,  7.7,  9.6, 11.5],
            ["low",        0.7, 1.3, 2.6,  3.9,  5.2,  6.5,  7.8]
        ], 
        [
            ["extra-high", 2.0, 3.9, 7.9, 11.8, 15.8, 19.7, 23.5],
            ["very-high",  1.6, 3.2, 6.5,  9.7, 13.0, 16.2, 19.4],
            ["high",       1.1, 2.2, 4.4,  6.7,  8.9, 11.1, 13.3],
            ["medium",       0,   0,   0,    0,    0,    0,    0],
            ["low",          0,   0,   0,    0,    0,    0,    0]
        ]
    ]

    const ctpHandler = () => {
        const ctpRoofWeight = document.querySelector('#ctpRoofWeight').value;
        const ctpWindZone = document.querySelector('#ctpWindZone').value;
        const ctpRoofSupport = document.querySelector('#ctpRoofSupport').value;

            if(ctpRoofWeight == "light") {
                for(let i = 0; i < 6; i++) {
                    if(ctpWindZone == ctpArr[0][i][0]) {
                        for(let j = 1; j < 8; j++) {
                            if(ctpRoofSupport == ctpArr[0][0][j]) {
                                setConnectionStrength(ctpArr[0][i][j].toFixed(2));
                                break;
                            }
                        }
                    }
                }
            } else if(ctpRoofWeight == "heavy") {
                for(let i = 0; i < 5; i++) {
                    if(ctpWindZone == ctpArr[1][i][0]) {
                        for(let j = 1; j < 8; j++) {
                            if(ctpRoofSupport == ctpArr[0][0][j]) {
                                setConnectionStrength(ctpArr[1][i][j].toFixed(1));
                                break;
                            }
                        }
                    }
                }
            }
    }

    return (
        <div>
            <h4 className="h5 pl-10 blue fw-700" style={{width: 320}}>Connections To Posts & Beams(kN)</h4>
            <CardSmallalt>
                <div onChange={ctpHandler}>
                    <div className="flex-row  mb-20">
                        <p className="body dark-gray">Roof Type</p>
                        <select className="select-sm label" id="ctpRoofWeight">
                            <option value="light">Light</option>
                            <option value="heavy">Heavy</option>
                        </select>
                    </div>
                    <div className="flex-row mb-20">
                        <p className="body dark-gray">Wind Zone</p>
                        <select className="select-sm label" id="ctpWindZone">
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                            <option value="very-high">Very High</option>
                            <option value="extra-high">Extra High</option>
                        </select>
                    </div>
                    <div className="flex-row mb-20">
                        <p className="body dark-gray">Area of supported roof</p>
                        <select className="select-sm label" id="ctpRoofSupport">
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
                    <h5 className="h5-0mg fw-700 mb-10">Capacity of post and beam connections: <span className="result-text_md blue fw-800 ml-10 mb-10">{connectionStrength}kN</span> </h5>
                </div>
            </CardSmallalt>
        </div>
    )
};

export default ConnectionToPost;