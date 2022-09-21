import React, {useState} from "react";
import CardSmallalt from "../../components/CardSmallalt";

const LumberLok = () => {
    const [lumberlokFixingType, setLumberlokFixingType] = useState(0);

    // lumberlokArr[0][0][0][0]
    // lumberlokArr[lintelspan][roofweight][one row equals a loaded dimension][value]
    const lumberlokArr = [
        [ // 1.0m lintel span
            [ // light roof
            //    L    M    H   VH   EH
                ["E", "E", "E", "F", "F"], // loaded dimension
                ["E", "E", "F", "F", "F"],
                ["E", "F", "F", "F", "G"],
                ["E", "F", "F", "G", "G"],
                ["E", "F", "F", "G", "G"]
            ],
            [ // heavy roof
                ["E", "E", "E", "E", "F"],
                ["E", "E", "E", "F", "F"],
                ["E", "E", "F", "F", "F"],
                ["E", "E", "F", "F", "G"],
                ["E", "E", "F", "F", "G"]
            ]
        ],
        [ // 1.2m lintel span
            [
            //    L    M    H   VH   EH
                ["E", "E", "F", "F", "F"], // loaded dimension
                ["E", "E", "F", "F", "F"],
                ["E", "F", "F", "G", "G"],
                ["E", "F", "F", "G", "G"],
                ["F", "F", "G", "G", "H"]
            ],
            [ // heavy roof
                ["E", "E", "E", "F", "F"],
                ["E", "E", "F", "F", "F"],
                ["E", "E", "F", "F", "G"],
                ["E", "E", "F", "F", "G"],
                ["E", "E", "F", "G", "G"]
            ]
        ]
    ]

    const lumberlokArr2 = [
        [
            [    0,     0, "l", "m", "h", "vh", "eh"]
            ["1.0", "2.0", "E", "E", "E",  "F",  "F"],
            ["1.0", "3.0", "E", "E", "F",  "F",  "F"],
            ["1.0", "4.0", "E", "F", "F",  "F",  "G"],
            ["1.0", "5.0", "E", "F", "F",  "G",  "G"],
            ["1.0", "6.0", "E", "F", "F",  "G",  "G"]
        ],
        [
            ["1.2", "2.0", "E", "E", "F", "F", "F"],
            ["1.2", "3.0", "E", "E", "F", "F", "F"],
            ["1.2", "4.0", "E", "F", "F", "G", "G"],
            ["1.2", "5.0", "E", "F", "F", "G", "G"],
            ["1.2", "6.0", "F", "F", "G", "G", "H"]
        ]

    ]

    const lumberlokHandler = () => {
        const lLWindZone = document.querySelector('#lLWindZone').value;
        const lLRoofWeight = document.querySelector('#lLRoofWeight').value;
        const lLLintelSpan = document.querySelector('#lLLintelSpan').value;
        const lLLoadedDimension = document.querySelector('#lLLoadedDimension').value;


        for(let i = 0; i < 6; i++) {

        }




        if(lLLintelSpan == "1") {

            if(lLRoofWeight == "light") {
                 
            } else if(lLRoofWeight == "heavy") {

            }
        }  else if(lLLintelSpan == "1.2") {

            if(lLRoofWeight == "light") {
                 
            } else if(lLRoofWeight == "heavy") {
                
            }
        } 

    }

    return(
        <div>
            <h4 className="h5 pl-10 fw-900 black">LumberLok Lintel Fixings</h4>
            <CardSmallalt>
                <div onChange={lumberlokHandler}>
                    <div className="flex-row  mb-20">
                        <p className="body black">Wind Zone</p>
                        <select className="select-sm label dark-gray" id="lLWindZone">
                            <option value="l">Low</option>
                            <option value="m">Medium</option>
                            <option value="h">High</option>
                            <option value="vh">Very High</option>
                            <option value="eh">Extra High</option>
                        </select>
                    </div>
                    <div className="flex-row  mb-20">
                        <p className="body black">Roof Weight</p>
                        <select className="select-sm label dark-gray" id="lLRoofWeight">
                            <option value="light">Light</option>
                            <option value="heavy">Heavy</option>
                        </select>
                    </div>
                    <div className="flex-row  mb-20">
                        <p className="body black">Max Lintel Span</p>
                        <select className="select-sm label dark-gray" id="lLLintelSpan">
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
                        <p className="body black">Max Loaded Dimension</p>
                        <select className="select-sm label dark-gray" id="lLLoadedDimension">
                            <option value="2">2.0m</option>
                            <option value="3">3.0m</option>
                            <option value="4">4.0m</option>
                            <option value="5">5.0m</option>
                            <option value="6">6.0m</option>
                        </select>
                    </div>
                </div>
                <div className="mb-20 mt-30 flex">
                    <h5 className="h5-0mg fw-900 black mb-10">Fixing Type Required: </h5>
                    <h5 className="h5-0mg fw-900 bright-blue mb-10">{lumberlokFixingType}</h5>
                </div>
            </CardSmallalt>
        </div>
    )
} 

export default LumberLok;