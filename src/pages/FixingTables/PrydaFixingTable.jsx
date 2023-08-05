import React, {useState} from "react";
import CardSmallalt from "../../components/CardSmallalt";

const Pryda = () => {    
    const prydaLintelSpanArr = [0.6, 0.9, 1.2, 1.8, 2.1, 2.4, 30, 3.6, 4.2, 4.8];
    const prydaRoofWeightArr = ["light", "heavy"];
    const prydaWindArr = ["l", "m", "h", "vh", "eh"];
    const LDValuesArr = [2.0, 3.0, 4.0, 5.0, 6.0];
    const [PrydaFixingType, setPrydaFixingType] = useState("L1");
    

    const prydaArr = [
        [ // 0.6m lintel span
            [ // Light Roof
            //   2.0    3.0   4.0   5.0   6.0 <-- Loaded dimension = vertical
                ["L1", "L1", "L1", "L1", "L1"], // <-- Wind Zone = Horizontal
                ["L1", "L1", "L1", "L1", "L1"],
                ["L1", "L1", "L1", "L2", "L2"],
                ["L1", "L1", "L2", "L2", "L2"],
                ["L1", "L2", "L2", "L2", "L3"]
            ],
            [ // heavy roof
            //   2.0    3.0   4.0   5.0   6.0 <-- Loaded dimension = vertical
                ["L1", "L1", "L1", "L1", "L1"], // <-- Wind Zone = Horizontal
                ["L1", "L1", "L1", "L1", "L1"],
                ["L1", "L1", "L1", "L1", "L1"],
                ["L1", "L1", "L1", "L2", "L2"],
                ["L1", "L1", "L2", "L2", "L2"]
            ]
        ],
        [ // 0.9m lintel span
            [ 
                ["L1", "L1", "L1", "L1", "L1"],
                ["L1", "L1", "L1", "L1", "L2"],
                ["L1", "L1", "L2", "L2", "L2"],
                ["L1", "L2", "L2", "L3", "L3"],
                ["L2", "L2", "L3", "L3", "L3"]
            ],
            [
                ["L1", "L1", "L1", "L1", "L1"],
                ["L1", "L1", "L1", "L1", "L1"],
                ["L1", "L1", "L1", "L2", "L2"],
                ["L1", "L2", "L2", "L2", "L2"],
                ["L2", "L2", "L2", "L3", "L3"]
            ]
        ],
        [ // 1.2m lintel span
            [
                ["L1", "L1", "L1", "L1", "L1"],
                ["L1", "L1", "L2", "L2", "L2"],
                ["L1", "L2", "L2", "L3", "L3"],
                ["L2", "L2", "L3", "L3", "L3"],
                ["L2", "L3", "L3", "L3", "L3"]
            ],
            [
                ["L1", "L1", "L1", "L1", "L1"],
                ["L1", "L1", "L1", "L1", "L1"],
                ["L1", "L1", "L2", "L2", "L2"],
                ["L1", "L2", "L2", "L3", "L3"],
                ["L2", "L2", "L3", "L3", "L3"]
            ]
        ],
        [ // 1.8m lintel span
            [
                ["L1", "L1", "L1", "L2", "L2"],
                ["L1", "L2", "L2", "L2", "L3"],
                ["L2", "L3", "L3", "L3", "L3"],
                ["L3", "L3", "L3", "L3", "L4"],
                ["L3", "L3", "L3", "L4", "L4"]
            ],
            [
                ["L1", "L1", "L1", "L1", "L1"],
                ["L1", "L1", "L1", "L1", "L2"],
                ["L1", "L2", "L2", "L3", "L3"],
                ["L2", "L3", "L3", "L3", "L3"],
                ["L3", "L3", "L3", "L3", "L4"]
            ]
        ],
        [ // 2.1m lintel span
            [
                ["L1", "L1", "L2", "L2", "L2"],
                ["L2", "L2", "L2", "L3", "L3"],
                ["L2", "L3", "L3", "L3", "L3"],
                ["L3", "L3", "L3", "L4", "L4"],
                ["L3", "L3", "L4", "L4", "L4"]
            ],
            [
                ["L1", "L1", "L1", "L1", "L1"],
                ["L1", "L1", "L1", "L2", "L2"],
                ["L2", "L2", "L3", "L3", "L3"],
                ["L2", "L3", "L3", "L3", "L3"],
                ["L3", "L3", "L3", "L4", "L4"]
            ]
        ],
        [ // 2.4m lintel span
            [
                ["L1", "L1", "L2", "L2", "L2"],
                ["L2", "L2", "L3", "L3", "L3"],
                ["L2", "L3", "L3", "L3", "L4"],
                ["L3", "L3", "L4", "L4", "L4"],
                ["L3", "L4", "L4", "L4", "SED"]
            ],
            [
                ["L1", "L1", "L1", "L1", "L1"],
                ["L1", "L1", "L1", "L2", "L2"],
                ["L2", "L2", "L3", "L3", "L3"],
                ["L3", "L3", "L3", "L3", "L4"],
                ["L3", "L3", "L4", "L4", "L4"]
            ]
        ],
        [ // 3.0m lintel span
            [
                ["L1", "L2", "L2", "L3", "L3"],
                ["L2", "L3", "L3", "L3", "L3"],
                ["L3", "L3", "L3", "L4", "L4"],
                ["L3", "L4", "L4", "L4", "SED"],
                ["L3", "L4", "L4", "SED", "SED"]
            ],
            [
                ["L1", "L1", "L1", "L1", "L1"],
                ["L1", "L1", "L2", "L2", "L2"],
                ["L2", "L3", "L3", "L3", "L3"],
                ["L3", "L3", "L3", "L4", "L4"],
                ["L3", "L4", "L4", "L4", "SED"]
            ]
        ],
        [ // 3.6m lintel span
            [
                ["L2", "L2", "L2", "L3", "L3"],
                ["L2", "L3", "L3", "L3", "L3"],
                ["L3", "L3", "L4", "L4", "L4"],
                ["L3", "L4", "L4", "SED", "SED"],
                ["L4", "L4", "SED", "SED", "SED"]
            ],
            [
                ["L1", "L1", "L1", "L1", "L1"],
                ["L1", "L2", "L2", "L2", "L3"],
                ["L2", "L3", "L3", "L3", "L4"],
                ["L3", "L3", "L4", "L4", "L4"],
                ["L3", "L4", "L4", "SED", "SED"]
            ]
        ],
        [ // 4.2m lintel span
            [
                ["L2", "L2", "L3", "L3", "L3"],
                ["L3", "L3", "L3", "L3", "L4"],
                ["L3", "L4", "L4", "L4", "SED"], // 3.4
                ["L4", "L4", "L4", "SED", "SED"],
                ["L4", "L4", "SED", "SED", "SED"]
            ],
            [
                ["L1", "L1", "L1", "L1", "L1"],
                ["L1", "L2", "L2", "L3", "L3"],
                ["L3", "L3", "L3", "L4", "L4"], // 3.4
                ["L3", "L4", "L4", "L4", "SED"],
                ["L4", "L4", "L4", "SED", "SED"],
            ]
        ],
        [ // 4.8m lintel span
            [
                ["L2", "L3", "L3", "L3", "L3"],
                ["L3", "L3", "L3", "L4", "L4"],
                ["L3", "L4", "L4", "L4", "SED"], // 3.2
                ["L4", "L4", "SED", "SED", "SED"],
                ["L4", "SED", "SED", "SED", "SED"]
            ],
            [
                ["L1", "L1", "L1", "L1", "L1"],
                ["L1", "L2", "L2", "L3", "L3"],
                ["L3", "L3", "L3", "L4", "L4"], // 3.2
                ["L3", "L4", "L4", "SED", "SED"],
                ["L4", "L4", "SED", "SED", "SED"]
            ]
        ]
    ]

    const prydaHandler = () => {
        const prydaWindZone = document.querySelector('#prydaWindZone').value;
        const prydaRoofWeight = document.querySelector('#prydaRoofWeight').value;
        const prydaLintelSpan = document.querySelector('#prydaLintelSpan').value;
        const prydaLoadedDimension = document.querySelector('#prydaLoadedDimension').value;


        for(let i = 0; i < 10; i++) {
            if(prydaLintelSpan == prydaLintelSpanArr[i]) {
                for(let j = 0; j < 2; j++) {
                    if(prydaRoofWeight == prydaRoofWeightArr[j]){
                        for(let k = 0; k < 5; k++){
                            if(prydaWindZone == prydaWindArr[k]){
                                for(let l = 0; l < 5; l++){
                                    if(prydaLoadedDimension == LDValuesArr[l]){
                                        setPrydaFixingType(prydaArr[i][j][k][l]);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    return(
        <div>
            <h4 className="h5 blue pl-10 fw-700">Pryda Lintel Fixings</h4>
            <CardSmallalt>
                <div onChange={prydaHandler}>
                    <div className="flex-row  mb-20">
                        <p className="body dark-gray">Wind Zone</p>
                        <select className="select-sm label" id="prydaWindZone">
                            <option value="l">Low</option>
                            <option value="m">Medium</option>
                            <option value="h">High</option>
                            <option value="vh">Very High</option>
                            <option value="eh">Extra High</option>
                        </select>
                    </div>
                    <div className="flex-row  mb-20">
                        <p className="body dark-gray">Roof Weight</p>
                        <select className="select-sm label" id="prydaRoofWeight">
                            <option value="light">Light</option>
                            <option value="heavy">Heavy</option>
                        </select>
                    </div>
                    <div className="flex-row  mb-20">
                        <p className="body dark-gray">Max Lintel Span</p>
                        <select className="select-sm label" id="prydaLintelSpan">
                            <option value="0.6">0.6m</option>
                            <option value="0.9">0.9m</option>
                            <option value="1.2">1.2m</option>
                            <option value="1.8">1.8m</option>
                            <option value="2.1">2.1m</option>
                            <option value="2.4">2.4m</option>
                            <option value="3.0">3.0m</option>
                            <option value="3.6">3.6m</option>
                            <option value="4.2">4.2m</option>
                            <option value="4.8">4.8m</option>
                        </select>
                    </div>
                    <div className="flex-row  mb-20">
                        <p className="body dark-gray">Max Loaded Dimension</p>
                        <select className="select-sm label" id="prydaLoadedDimension">
                                <option value="2.0" >2.0</option>
                                <option value="3.0" >3.0</option>
                                <option value="4.0" >4.0</option>
                                <option value="5.0" >5.0</option>
                                <option value="6.0" >6.0</option>
                        </select>
                    </div>
                </div>
                <div className="mb-20 mt-30 flex">
                    <h5 className="h5-0mg fw-700 mb-10">Fixing Type Required: </h5>
                    <h5 className="result-text_md blue fw-800 mb-10">{PrydaFixingType}</h5>
                </div>
                <p className="label fw-700 mt-20">Note:</p>
                <p className="label dark-gray mt-10"><span className="label fw-800">(1)</span> Lintel spans and loaded dimensions measured in metres.</p>
                <p className="label dark-gray mt-10"><span className="label fw-800">(2)</span> All frame nailing not indicated, refer to table 8.19 of
                 NZS 3604:2011. </p>
                <p className="label dark-gray mt-10"><span className="label fw-800">(3)</span> In all cases a 90mm thick external wall is assumed.</p>
                <p className="label dark-gray mt-10"><span className="label fw-800">(4)</span> For girder truss loads use a minimum of: L3 where girder 
                carries more than 10sq.m. of roof and L4 where girder carries more than 18sq.m. of roof.</p>
                <p className="label dark-gray mt-10"><span className="label fw-800">(5)</span> 600mm overhangs allowed for in the tables.</p>
                <p className="label dark-gray mt-10"><span className="label fw-800">(6)</span> SED designates that a Specific Design is required.</p>
            </CardSmallalt>
        </div>
    )
} 

export default Pryda;