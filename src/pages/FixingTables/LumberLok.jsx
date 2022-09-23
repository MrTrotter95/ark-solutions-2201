import React, {useState} from "react";
import CardSmallalt from "../../components/CardSmallalt";

const LumberLok = () => {    
    const lLLintelSpanArr = [1.0, 1.2, 1.5, 2.0, 2.4, 3.0, 3.6, 4.2, 4.5, 4.8, 5.1, 5.4];
    const lLRoofWeightArr = ["light", "heavy"];
    const lLWindArr = ["l", "m", "h", "vh", "eh"];
    const LDValuesArr = [2.0, 3.0, 4.0, 5.0, 6.0];
    const LDfourFiveValuesArr = [2.0, 3.0, 3.4, 4.0, 5.0, 6.0];
    const LDfourEightValuesArr = [2.0, 3.0, 3.2, 4.0, 5.0, 6.0];
    const LDFiveOneValuesArr = [2.0, 3.0, 3.5, 4.0, 5.0, 6.0];
    const LDFiveFourValuesArr = [2.0, 2.8, 3.5, 4.0, 5.0, 6.0];

    const mainLDOptArr = [
        {value: 2.0, text: '2.0'},
        {value: 3.0, text: '3.0'},
        {value: 4.0, text: '4.0'},
        {value: 5.0, text: '5.0'},
        {value: 6.0, text: '6.0'},
    ]

    const fourFiveLDOptArr = [
        {value: 2.0, text: '2.0'},
        {value: 3.0, text: '3.0'},
        {value: 3.4, text: '3.4'},
        {value: 4.0, text: '4.0'},
        {value: 5.0, text: '5.0'},
        {value: 6.0, text: '6.0'},
    ]

    const fourEightLDOptArr = [
        {value: 2.0, text: '2.0'},
        {value: 3.0, text: '3.0'},
        {value: 3.2, text: '3.2'},
        {value: 4.0, text: '4.0'},
        {value: 5.0, text: '5.0'},
        {value: 6.0, text: '6.0'},
    ]

    const fiveOneLDOptArr = [
        {value: 2.0, text: '2.0'},
        {value: 3.0, text: '3.0'},
        {value: 3.5, text: '3.5'},
        {value: 4.0, text: '4.0'},
        {value: 5.0, text: '5.0'},
        {value: 6.0, text: '6.0'},
    ]

    const fiveFourLDOptArr = [
        {value: 2.0, text: '2.0'},
        {value: 2.8, text: '2.8'},
        {value: 3.0, text: '3.0'},
        {value: 4.0, text: '4.0'},
        {value: 5.0, text: '5.0'},
        {value: 6.0, text: '6.0'},
    ]

    const [lDOptions, setLDOptions] = useState(mainLDOptArr);
    const [lDValues, setLDValues] = useState(LDValuesArr);
    const [lumberlokFixingType, setLumberlokFixingType] = useState(0);
    

    const lumberlokArr = [
        [
            [ // Light Roof
            //    L    M    H   VH   EH
                ["E", "E", "E", "F", "F"], // loaded dimension
                ["E", "E", "F", "F", "F"],
                ["E", "F", "F", "F", "G"],
                ["E", "F", "F", "G", "G"],
                ["E", "F", "F", "G", "G"]
            ],
            [ // heavy roof
            //    L    M    H   VH   EH
                ["E", "E", "E", "E", "F"], // loaded dimension
                ["E", "E", "E", "F", "F"],
                ["E", "E", "F", "F", "F"],
                ["E", "E", "F", "F", "G"],
                ["E", "E", "F", "F", "G"]
            ]
        ],
        [ // 1.2m lintel span
            [ 
                ["E", "E", "F", "F", "F"],
                ["E", "E", "F", "F", "F"],
                ["E", "F", "F", "G", "G"],
                ["E", "F", "F", "G", "G"],
                ["F", "F", "G", "G", "H"]
            ],
            [
                ["E", "E", "E", "F", "F"],
                ["E", "E", "F", "F", "F"],
                ["E", "E", "F", "F", "G"],
                ["E", "E", "F", "F", "G"],
                ["E", "E", "F", "G", "G"]
            ]
        ],
        [ // 1.5m lintel span
            [
                ["E", "E", "F", "F", "F"],
                ["E", "F", "F", "F", "G"],
                ["E", "F", "F", "G", "G"],
                ["F", "F", "G", "G", "H"],
                ["F", "F", "G", "H", "H"]
            ],
            [
                ["E", "E", "E", "F", "F"],
                ["E", "E", "F", "F", "F"],
                ["E", "E", "F", "F", "G"],
                ["E", "E", "F", "G", "G"],
                ["E", "E", "F", "G", "H"]
            ]
        ],
        [ // 2.0m lintel span
            [
                ["E", "F", "F", "F", "G"],
                ["E", "F", "F", "G", "G"],
                ["F", "F", "G", "G", "H"],
                ["F", "F", "G", "H", "H"],
                ["F", "G", "G", "H", "H"]
            ],
            [
                ["E", "E", "F", "F", "F"],
                ["E", "E", "F", "F", "G"],
                ["E", "E", "F", "G", "G"],
                ["E", "E", "F", "G", "H"],
                ["E", "F", "G", "H", "H"]
            ]
        ],
        [ // 2.4m lintel span
            [
                ["E", "F", "F", "G", "G"],
                ["F", "F", "G", "G", "H"],
                ["F", "F", "G", "H", "H"],
                ["F", "G", "G", "H", "H"],
                ["F", "G", "H", "H", "-"]
            ],
            [
                ["E", "E", "F", "F", "G"],
                ["E", "E", "F", "G", "G"],
                ["E", "E", "F", "G", "H"],
                ["E", "F", "G", "H", "H"],
                ["E", "F", "G", "H", "H"]
            ]
        ],
        [ // 3.0m lintel span
            [
                ["E", "F", "F", "G", "G"],
                ["F", "F", "G", "H", "H"],
                ["F", "G", "G", "H", "H"],
                ["F", "G", "H", "H", "-"],
                ["F", "G", "H", "-", "-"]
            ],
            [
                ["E", "E", "F", "F", "G"],
                ["E", "E", "F", "G", "H"],
                ["E", "F", "G", "H", "H"],
                ["E", "F", "G", "H", "H"],
                ["E", "F", "G", "H", "-"]
            ]
        ],
        [ // 3.6m lintel span
            [
                ["F", "F", "G", "G", "H"],
                ["F", "F", "G", "H", "H"],
                ["F", "G", "H", "H", "-"],
                ["F", "G", "H", "-", "-"],
                ["G", "H", "H", "-", "-"]
            ],
            [
                ["E", "E", "F", "G", "G"],
                ["E", "F", "G", "G", "H"],
                ["E", "F", "G", "H", "H"],
                ["E", "F", "G", "H", "-"],
                ["E", "F", "H", "-", "-"]
            ]
        ],
        [ // 4.2m lintel span
            [
                ["F", "F", "G", "G", "H"],
                ["F", "G", "H", "H", "-"],
                ["F", "G", "H", "-", "-"],
                ["G", "H", "H", "-", "-"],
                ["G", "H", "-", "-", "-"]
            ],
            [
                ["E", "E", "F", "G", "G"],
                ["E", "F", "G", "H", "H"],
                ["E", "F", "G", "H", "-"],
                ["E", "F", "H", "-", "-"],
                ["E", "F", "H", "-", "-"]
            ]
        ],
        [ // 4.5m lintel span
            [
                ["F", "F", "G", "H", "H"],
                ["F", "G", "H", "H", "-"],
                ["F", "G", "H", "H", "-"], // 3.4
                ["F", "G", "H", "-", "-"],
                ["G", "H", "-", "-", "-"],
                ["G", "H", "-", "-", "-"]
            ],
            [
                ["E", "E", "F", "G", "H"],
                ["E", "F", "G", "H", "H"],
                ["E", "F", "G", "H", "H"], // 3.4
                ["E", "F", "G", "H", "-"],
                ["E", "F", "H", "-", "-"],
                ["E", "F", "H", "-", "-"]
            ]
        ],
        [ // 4.8m lintel span
            [
                ["F", "F", "G", "H", "H"],
                ["F", "G", "H", "H", "-"],
                ["F", "G", "H", "H", "-"], // 3.2
                ["F", "G", "H", "-", "-"],
                ["G", "H", "-", "-", "-"],
                ["G", "H", "-", "-", "-"]
            ],
            [
                ["E", "E", "F", "G", "H"],
                ["E", "F", "G", "H", "H"],
                ["E", "F", "G", "H", "H"], // 3.2
                ["E", "F", "H", "H", "-"],
                ["E", "F", "H", "-", "-"],
                ["E", "F", "H", "-", "-"]
            ]
        ],
        [ // 5.1m lintel span
            [
                ["F", "F", "G", "H", "H"],
                ["F", "G", "H", "H", "-"],
                ["F", "G", "H", "-", "-"], // 3.5
                ["G", "G", "H", "-", "-"],
                ["G", "H", "-", "-", "-"],
                ["G", "H", "-", "-", "-"]
            ],
            [
                ["E", "F", "G", "G", "H"],
                ["E", "F", "G", "H", "H"], 
                ["E", "F", "G", "H", "-"], // 3.5
                ["E", "F", "H", "H", "-"],
                ["E", "F", "H", "-", "-"],
                ["E", "G", "H", "-", "-"]
            ]
        ],
        [ // 5.4m lintel span
            [
                ["F", "F", "G", "H", "H"],
                ["F", "G", "H", "H", "-"], // 2.8
                ["F", "G", "H", "-", "-"], 
                ["G", "G", "H", "-", "-"],
                ["G", "H", "-", "-", "-"],
                ["G", "H", "-", "-", "-"]
            ],
            [
                ["E", "F", "G", "G", "H"],
                ["E", "F", "G", "H", "H"], // 2.8
                ["E", "F", "G", "H", "-"],
                ["E", "F", "H", "H", "-"],
                ["E", "F", "H", "-", "-"],
                ["E", "G", "H", "-", "-"]
            ]
        ]
    ]



    const lumberlokHandler = () => {
        const lLWindZone = document.querySelector('#lLWindZone').value;
        const lLRoofWeight = document.querySelector('#lLRoofWeight').value;
        const lLLintelSpan = document.querySelector('#lLLintelSpan').value;
        const lLLoadedDimension = document.querySelector('#lLLoadedDimension').value;



        if(lLLintelSpan == 4.5){
            setLDOptions(fourFiveLDOptArr);
            setLDValues(LDfourFiveValuesArr);
        } else if(lLLintelSpan == 4.8){
            setLDOptions(fourEightLDOptArr);
            setLDValues(LDfourEightValuesArr);
        } else if(lLLintelSpan == 5.1) {
            setLDOptions(fiveOneLDOptArr);
            setLDValues(LDFiveOneValuesArr);
        } else if(lLLintelSpan == 5.4) {
            setLDOptions(fiveFourLDOptArr);
            setLDValues(LDFiveFourValuesArr);
        } else {
            setLDOptions(mainLDOptArr);
            setLDValues(LDValuesArr);
        }


        for(let i = 0; i < 12; i++) {
            if(lLLintelSpan == lLLintelSpanArr[i]) {
                for(let j = 0; j < 2; j++) {
                    if(lLRoofWeight == lLRoofWeightArr[j]){
                        for(let k = 0; k < 6; k++){
                            if(lLLoadedDimension == lDValues[k]){
                                for(let l = 0; l < 5; l++){
                                    if(lLWindZone == lLWindArr[l]){
                                        setLumberlokFixingType(lumberlokArr[i][j][k][l]);
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
            <h4 className="h5 dt-blue pl-10 fw-800">Lumberlok Lintel Fixings</h4>
            <CardSmallalt>
                <div onChange={lumberlokHandler}>
                    <div className="flex-row  mb-20">
                        <p className="body dt-gray">Wind Zone</p>
                        <select className="select-sm label" id="lLWindZone">
                            <option value="l">Low</option>
                            <option value="m">Medium</option>
                            <option value="h">High</option>
                            <option value="vh">Very High</option>
                            <option value="eh">Extra High</option>
                        </select>
                    </div>
                    <div className="flex-row  mb-20">
                        <p className="body dt-gray">Roof Weight</p>
                        <select className="select-sm label" id="lLRoofWeight">
                            <option value="light">Light</option>
                            <option value="heavy">Heavy</option>
                        </select>
                    </div>
                    <div className="flex-row  mb-20">
                        <p className="body dt-gray">Max Lintel Span</p>
                        <select className="select-sm label" id="lLLintelSpan">
                            <option value="1">1.0m</option>
                            <option value="1.2">1.2m</option>
                            <option value="1.5">1.5m</option>
                            <option value="2.0">2.0m</option>
                            <option value="2.4">2.4m</option>
                            <option value="3.0">3.0m</option>
                            <option value="3.6">3.6m</option>
                            <option value="4.2">4.2m</option>
                            <option value="4.5">4.5m</option>
                            <option value="4.8">4.8m</option>
                            <option value="5.1">5.1m</option>
                            <option value="5.4">5.4m</option>
                        </select>
                    </div>
                    <div className="flex-row  mb-20">
                        <p className="body dt-gray">Max Loaded Dimension</p>
                        <select className="select-sm label" id="lLLoadedDimension">
                            {lDOptions.map(props => (
                                <option value={props.value}>{props.text}</option>
                            ))}
                        
                        </select>
                    </div>
                </div>
                <div className="mb-20 mt-30 flex">
                    <h5 className="h5-0mg dt-white fw-800 mb-10">Fixing Type Required: </h5>
                    <h5 className="result-text_md dt-blue fw-800 mb-10">{lumberlokFixingType}</h5>
                </div>
                <p className="label dt-white fw-700 mt-20">Note:</p>
                <p className="label dt-gray mt-10"><span className="label fw-800">(1)</span> Calculator does NOT include allowance
                for lintels supporting Girder Trusses. </p>
                <p className="label dt-gray mt-10"><span className="label fw-800">(2)</span> All fixings are designed for vertical 
                loads only. Dead loads include the roof weight and standard ceiling weight of 0.20kPa.</p>
                <p className="label dt-gray mt-10"><span className="label fw-800">(3)</span> Refer to Table 8.19 NZS 3604:2011 for 
                nailing schedule to resist horizontal loads. </p>
                <p className="label dt-gray mt-10"><span className="label fw-800">(4)</span> These fixings assume the correct choice 
                of rafter/truss to top plate connections have been made.</p>
                <p className="label dt-gray mt-10"><span className="label fw-800">(5)</span> All fixings assume bottom plate thickness 
                of 45mm maximum. Note: TYLOK options on timber species. </p>
                <p className="label dt-gray mt-10"><span className="label fw-800">(6)</span> Wall framing arrangements under girder 
                trusses are not covered in this schedule.</p>
                <p className="label dt-gray mt-10"><span className="label fw-800">(7)</span> All timber selections are as per NZS 3604:2011.</p>
            </CardSmallalt>
        </div>
    )
} 

export default LumberLok;