import React, {useState} from "react";
import CardSmallalt from "../../../components/CardSmallalt";

const VerandahBeams = () => {
    const [verandahSpanResult, setVerandahSpanResult] = useState(1.8);
    const [verandahFixingResult, setVerandahFixingResult] = useState("N");
    const [verandahDescription, setVerandahDescription] = useState("6 / 100 x 4.0 nails hand-driven");
    const [verandahAlternateFix, setVerandahAlternateFix] = useState(4.7);

    const verRoofWeightArr = ["light", "heavy"];
    const verSizesArr = ["140x45", "190x45", "240x45", "290x45", "140x90", "190x90", "240x90", "290x90"];
    const verLDArr = [0.9, 1.4, 1.8, 2.1];
    
    const verRafterSpanArr = [
        [
            [1.8, 1.6, 1.5, 1.4],
            [2.1, 2.0, 1.8, 1.8],
            [2.4, 2.2, 2.1, 2.0],
            [2.5, 2.3, 2.2, 2.1],
            [2.2, 2.1, 2.0, 1.9],
            [3.1, 2.8, 2.7, 2.6],
            [3.9, 3.6, 3.4, 3.3],
            [5.9, 5.5, 5.2, 5.1]
        ],
        [
            [1.5, 1.4, 1.3, 1.2],
            [2.1, 1.9, 1.7, 1.7],
            [2.3, 2.1, 2.0, 1.9],
            [2.5, 2.3, 2.1, 2.1],
            [1.9, 1.8, 1.7, 1.7],
            [2.7, 2.5, 2.3, 2.3],
            [3.4, 3.1, 3.0, 2.9],
            [5.2, 4.8, 4.6, 4.4]
        ]
    ]

    const verFixingArr = [
        [
            ["N", "N", "N", "N"],
            ["N", "N", "O", "O"],
            ["N", "O", "O", "O"],
            ["O", "O", "O", "O"],
            ["N", "O", "O", "O"],
            ["O", "O", "P", "P"],
            ["P", "P", "P", "P"],
            ["P", "P", "Q", "Q"]
        ],
        [
            ["N", "N", "N", "N"],
            ["N", "N", "N", "N"],
            ["N", "N", "O", "O"],
            ["N", "N", "O", "O"],
            ["N", "N", "N", "N"],
            ["N", "O", "O", "O"],
            ["O", "O", "P", "P"],
            ["P", "P", "P", "P"]
        ]
    ]

    const verFixingTypesArr = [
        {
            fixingType: "N",
            description: "6 / 100 x 4.0 nails hand-driven",
            alternate: 4.7
        },
        {
            fixingType: "O",
            description: "2 / M12 bolts (see figure 9.3 (C))",
            alternate: 6.8
        },
        {
            fixingType: "P",
            description: "2 / HDG 'flat' straps (see figure 9.3 (B))",
            alternate: 13.7
        },
        {
            fixingType: "Q",
            description: "2 / HDG 'tee' straps (see figure 9.3 (A))",
            alternate: 25.5
        }
    ]

    const verandahHandler = () => {
        const verandahRW = document.querySelector('#verandahRW').value;
        const verandahLD = document.querySelector('#verandahLD').value;
        const verandahRafterSize = document.querySelector('#verandahRafterSize').value;

        for(let i = 0; i < verRoofWeightArr.length; i++) {
            if(verandahRW == verRoofWeightArr[i]) {
                for(let j = 0; j < verSizesArr.length; j++) {
                    if(verandahRafterSize == verSizesArr[j]) {
                        for(let k = 0; k < verLDArr.length; k++) {
                            if(verandahLD == verLDArr[k]) {
                                setVerandahSpanResult(verRafterSpanArr[i][j][k].toFixed(1));
                                setVerandahFixingResult(verFixingArr[i][j][k]);

                                // loop to display fixing connection details below the results
                                for(let h = 0; h < 4; h++){
                                    if(verFixingArr[i][j][k] == verFixingTypesArr[h].fixingType) {
                                        setVerandahDescription(verFixingTypesArr[h].description);
                                        setVerandahAlternateFix(verFixingTypesArr[h].alternate);
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
            <h4 className="h5 pl-10 blue fw-700">Verandah Beams SG8</h4>
            <CardSmallalt>
                <div onChange={verandahHandler}>
                    <div className="flex-row mb-20">
                        <p className="body dark-gray">Roof Weight</p>
                        <select className="select-sm label" id="verandahRW">
                            <option value="light">Light</option>
                            <option value="heavy">Heavy</option>
                        </select>
                    </div>
                    <div className="flex-row mb-20">
                        <p className="body dark-gray">Loaded Dimension Of Beam</p>
                        <select className="select-sm label" id="verandahLD">
                            <option value="0.9">0.9</option>
                            <option value="1.4">1.4</option>
                            <option value="1.8">1.8</option>
                            <option value="2.1">2.1</option>
                        </select>
                    </div>
                    <div className="flex-row mb-20">
                        <p className="body dark-gray">Desired Rafter Size</p>
                        <select className="select-sm label" id="verandahRafterSize">
                            <option value="140x45">140x45mm</option>
                            <option value="190x45">190x45mm</option>
                            <option value="240x45">240x45mm</option>
                            <option value="290x45">290x45mm</option>
                            <option value="140x90">140x90mm</option>
                            <option value="190x90">190x90mm</option>
                            <option value="240x90">240x90mm</option>
                            <option value="290x90">290x90mm</option>
                        </select>
                    </div>
                </div>

                <div className="mb-20 mt-30">
                    <h5 className="h5-0mg fw-700 mb-10">Maximum Span: <span className="result-text_md blue fw-800 ml-10 mb-10">{verandahSpanResult}</span> </h5>
                    <h5 className="h5-0mg fw-700 mb-10">Required Fixing Type: <span className="result-text_md blue fw-800 ml-10 mb-10">{verandahFixingResult}</span> </h5>
                </div>
                <div className="mb-30">
                    <p className="label fw-700 mt-10">Fixing to resist uplift</p>
                    <p className="label fw-700 blue">{verandahDescription}</p>
                    <p className="label fw-700 mt-10">Alternate fixing capacity (kN)</p>
                    <p className="label fw-700 blue">{verandahAlternateFix}</p>
                </div>
                <p className="label fw-700 mt-20">Note:</p>
                <p className="label dark-gray mt-10"><span className="label fw-800">(1)</span> This calculator includes provision for the rafters
                cantilevering a maximum of 750mm beyond the verandah beam to support a soffit.</p>
                <p className="label dark-gray mt-20"><span className="label fw-800">(2)</span> Fixing type for continuous spans shall have a
                double capacity to that listed in the table.</p>
                <p className="label dark-gray mt-20"><span className="label fw-800">(3)</span> Members 70mm and 90mm thick may be substituted 
                with built-up members sized and nailed in accordance with 2.4.4.7</p>
            </CardSmallalt>
        </div>
    )
};

export default VerandahBeams;