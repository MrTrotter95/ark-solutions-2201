import React, {useState} from "react";
import CardSmallalt from "../../../components/CardSmallalt";

const RidgeBeams = () => {
    const [ridgeBeamResult, setRidgeBeamResult] = useState(2.3);
    const [ridgeBeamFixingType, setRidgeBeamFixingType] = useState("H");
    const [baseConnection, setBaseConnection] = useState("25 x 1 strap with 12 nails to stud");
    const [ridgeConnection, setRidgeConnection] = useState("1 / M12 bolt");
    const [alternate, setAlternate] = useState(8.5);

    const ridgeBeamSizeArr = ["240x45", "290x45", "190x90", "240x90", "290x90"];
    const ridgeBeamLDArr = [1.8, 2.7, 3.6, 4.2];
    const ridgeBeamRWArr = ["light", "heavy"];

    const ridgeBeamLengthArr = [
        [// light roof
            [2.3, 1.9, 1.7, 1.6],
            [2.4, 2.1, 1.9, 1.8],
            [3.7, 3.2, 2.9, 2.8],
            [4.7, 4.1, 3.7, 3.5],
            [5.7, 5.0, 4.5, 4.3]
        ],
        [// heavy roof
            [2.3, 1.9, 1.6, 1.5],
            [2.5, 2.2, 1.9, 1.6],
            [3.1, 2.7, 2.5, 2.3],
            [4.0, 3.5, 3.1, 3.0],
            [4.8, 4.2, 3.8, 3.6]
        ]
    ]

    const ridgeBeamFixingArr = [
        [
            ["H", "H", "H", "H"],
            ["H", "H", "H", "I"],
            ["H", "I", "I", "I"],
            ["I", "I", "I", "J"],
            ["I", "I", "J", "J"]
        ],
        [
            ["G", "H", "H", "H"],
            ["H", "H", "H", "H"],
            ["H", "H", "I", "I"],
            ["H", "I", "I", "I"],
            ["I", "I", "I", "I"]
        ]
    ]

    const ridgeBeamFixingTypes = [
        {
            fixing: 'G',
            baseConnection: "6 / 90 x 3.15 skew nails into bottom plate",
            ridgeConnection: "10 / 90 x 3.15 nails (5 each side)",
            alternate: 4.7
        },
        {
            fixing: 'H',
            baseConnection: "25 x 1 strap with 12 nails to stud",
            ridgeConnection: "1 / M12 bolt",
            alternate: 8.5
        },
        {
            fixing: 'I',
            baseConnection: "2 / 25 x 1 straps with 6 nails to stud and plate. 24 nails total",
            ridgeConnection: "2 / M12 bolts",
            alternate: 16.0
        },
        {
            fixing: 'J',
            baseConnection: "3 / 25 x 1 straps with 12 nails to stud and plate. 36 nails total",
            ridgeConnection: "2 / M16 bolts",
            alternate: 24.0
        }
    ]

    const ridgeBeamHandler = () => {
        const ridgeBeamRoofWeight = document.querySelector('#ridgeBeamRoofWeight').value;
        const ridgeBeamLD = document.querySelector('#ridgeBeamLD').value;
        const ridgeBeamSize = document.querySelector('#ridgeBeamSize').value;

        for(let i = 0; i < ridgeBeamRWArr.length; i++){
            if(ridgeBeamRoofWeight == ridgeBeamRWArr[i]) {
                for(let j = 0; j < ridgeBeamSizeArr.length; j++) {
                    if(ridgeBeamSize == ridgeBeamSizeArr[j]) {
                        for(let k = 0; k < ridgeBeamLDArr.length; k++) {
                            if(ridgeBeamLD == ridgeBeamLDArr[k]) {
                                setRidgeBeamResult(ridgeBeamLengthArr[i][j][k].toFixed(1));
                                setRidgeBeamFixingType(ridgeBeamFixingArr[i][j][k]);

                                // loop to display fixing connection details bellow results
                                for(let h = 0; h < 4; h++) {
                                    if(ridgeBeamFixingArr[i][j][k] == ridgeBeamFixingTypes[h].fixing) {
                                        setBaseConnection(ridgeBeamFixingTypes[h].baseConnection);
                                        setRidgeConnection(ridgeBeamFixingTypes[h].ridgeConnection);
                                        setAlternate(ridgeBeamFixingTypes[h].alternate.toFixed(1));
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    return (
        <div> 
            <h4 className="h5 pl-10 blue fw-700">Ridge Beams SG8</h4>
            <CardSmallalt>
                <div onChange={ridgeBeamHandler}>
                    <div className="flex-row mb-20">
                        <p className="body dark-gray">Roof Weight</p>
                        <select className="select-sm label" id="ridgeBeamRoofWeight">
                            <option value="light">Light</option>
                            <option value="heavy">Heavy</option>
                        </select>
                    </div>
                    <div className="flex-row mb-20">
                        <p className="body dark-gray">Loaded Dimension Of Beam</p>
                        <select className="select-sm label" id="ridgeBeamLD">
                            <option value="1.8">1.8</option>
                            <option value="2.7">2.7</option>
                            <option value="3.6">3.6</option>
                            <option value="4.2">4.2</option>
                        </select>
                    </div>
                    <div className="flex-row mb-20">
                        <p className="body dark-gray">Desired Beam Size</p>
                        <select className="select-sm label" id="ridgeBeamSize">
                            <option value="240x45">240x45mm</option>
                            <option value="290x45">290x45mm</option>
                            <option value="190x90">190x90mm</option>
                            <option value="240x90">240x90mm</option>
                            <option value="290x90">290x90mm</option>
                        </select>
                    </div>
                </div>

                <div className="mb-20 mt-30">
                    <h5 className="h5-0mg fw-700 mb-10">Maximum Span: <span className="result-text_md blue fw-800 ml-10 mb-10">{ridgeBeamResult}</span> </h5>
                    <h5 className="h5-0mg fw-700 mb-10">Required Fixing Type: <span className="result-text_md blue fw-800 ml-10 mb-10">{ridgeBeamFixingType}</span> </h5>
                </div>
                <div className="mb-30">
                    <p className="label fw-700">Base connection for built-up studs</p>
                    <p className="label fw-700 blue">{baseConnection}</p>
                    <p className="label fw-700 mt-10">Ridge beam to built-up studs</p>
                    <p className="label fw-700 blue">{ridgeConnection}</p>
                    <p className="label fw-700 mt-10">Alternate fixing capacity (kN)</p>
                    <p className="label fw-700 blue">{alternate}</p>
                </div>
                <p className="label fw-700 mt-20">Note:</p>
                <p className="label dark-gray mt-10"><span className="label fw-800">(1)</span> Fix plate to joist with 1/M12 x 150 coach screw.</p>
                <p className="label dark-gray mt-20"><span className="label fw-800">(2)</span> Fix plate to joist with 2/M12 x 150 coach screw.</p>
                <p className="label dark-gray mt-20"><span className="label fw-800">(3)</span> Strap nails to be 30 x 2.5mm</p>
            </CardSmallalt>
        </div>
    )
};

export default RidgeBeams;