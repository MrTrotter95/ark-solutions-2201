import React, {useState} from "react";
import CardSmallalt from "../../../components/CardSmallalt";

const Rafters = () => {
    const rafterSizeArr = ["90x45", "140x45", "190x45", "240x45", "290x45", "140x90", "190x90", "240x90", "290x90"];
    const rafterSpacingArr = [480, 600, 900, 1200];


    const [rafterResult, setRafterResult] = useState(1.3);
    const [fixingResult, setFixingResult] = useState("E");
    const [is1200Spacing, setIs1200Spacing] = useState(false);


    const rafterArr = [
        [1.3, 1.3, 1.2, 1.3],
        [2.7, 2.5, 2.2, 2.2],
        [3.5, 3.3, 2.8, 2.5],
        [3.8, 3.5, 3.1, 2.8],
        [4.1, 3.8, 3.3, 3.0],
        [3.4, 3.2, 2.8, 3.0],
        [4.7, 4.3, 3.8, 4.1],
        [5.9, 5.5, 4.8, 5.1],
        [7.2, 6.7, 5.8, 5.9]
    ]

    const rafterFixingArr = [
        ["E", "E", "E", "E"],
        ["E", "E", "E", "E"],
        ["E", "E", "E", "E"],
        ["E", "E", "E", "E"],
        ["E", "E", "E", "E"],
        ["E", "E", "E", "E"],
        ["E", "E", "E", "F"],
        ["E", "E", "F", "F"],
        ["E", "E", "F", "F"]
    ]

    const rafterHandler = () => {
        const selectedRafterWindZone = document.querySelector('#selectedRafterWindZone').value;
        const selectedRafterSize = document.querySelector('#selectedRafterSize').value;
        const selectedRafterSpacing = document.querySelector('#selectedRafterSpacing').value;
        
        for(let i = 0; i < rafterSizeArr.length; i++) {
            if(selectedRafterSize == rafterSizeArr[i]){
                for(let j = 0; j < rafterSpacingArr.length; j++) {
                    if(selectedRafterSpacing == rafterSpacingArr[j]) {

                        if(selectedRafterWindZone == "low" || selectedRafterWindZone == "medium") {
                            setRafterResult((rafterArr[i][j] *= 1.3).toFixed(2));
                        } else if (selectedRafterWindZone == "high" || selectedRafterWindZone == "very-high") {
                            setRafterResult((rafterArr[i][j] *= 1.1).toFixed(2));
                        } else {
                            setRafterResult(rafterArr[i][j].toFixed(1));
                            setFixingResult(rafterFixingArr[i][j]);
                        }

                        if(selectedRafterSpacing == 1200) {
                            setIs1200Spacing(true);
                        } else {
                            setIs1200Spacing(false);
                        }
                    }
                }
            }
        }
    }

    return (
        <div>
            <h4 className="h5 pl-10 blue fw-700">Rafters SG8</h4>
            <CardSmallalt>
                <div onChange={rafterHandler}>
                    <div className="flex-row mb-20">
                        <p className="body dark-gray">Wind Zone</p>
                        <select className="select-sm label" id="selectedRafterWindZone">
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                            <option value="very-high">Very High</option>
                            <option value="extra-high">Extra High</option>
                        </select>
                    </div>
                    <div className="flex-row mb-20">
                        <p className="body dark-gray">Desired Rafter Size</p>
                        <select className="select-sm label" id="selectedRafterSize">
                            <option value="90x45">90x45mm</option>
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
                    <div className="flex-row mb-20">
                        
                        <p className="body dark-gray">Desired Rafter Spacing</p>
                        <select className="select-sm label" id="selectedRafterSpacing">
                            <option value="480">480mm</option>
                            <option value="600">600mm</option>
                            <option value="900">900mm</option>
                            <option value="1200">1200mm</option>
                        </select>
                    </div>
                    <div className="mt-30">
                        {is1200Spacing && <p className="body fw-600 warning mb-10">Rafter spacing of 1200mm does not include heavy roofs.</p>}
                        
                        <h5 className="h5-0mg fw-700">Maximum Span: <span className="result-text_md blue fw-800 ml-10 mb-10">{rafterResult}m</span></h5>
                        <p className="label dark-gray mb-10">See note <span className="label fw-800">(1)</span></p>
                        <h5 className="h5-0mg fw-700 mb-10">Required Fixing Type: <span className="result-text_md blue fw-800 ml-10 mb-10">{fixingResult}</span> </h5>
                    </div>
                </div>
                <div>
                    <table className="table-sm text-center">
                        <thead>
                            <tr>
                                <th><p className="label__window fw-700">Fixing Type</p></th>
                                <th><p className="label__window fw-700">Description</p></th>
                                <th><p className="label__window fw-700">Alternate Fixing Capacity (kN)</p></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><p className="label__window">E</p></td>
                                <td><p className="label__window">2/90 x 3.15 skew nails + 2 wire dogs</p></td>
                                <td><p className="label__window">4.7</p></td>
                            </tr>
                            <tr>
                                <td><p className="label__window">F</p></td>
                                <td><p className="label__window">2/90 x 3.15 skew nails + strap fixing</p></td>
                                <td><p className="label__window">7.0</p></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className="label fw-700 mt-20">Note:</p>
                <p className="label dark-gray mt-10"><span className="label fw-800">(1)</span> Rafter result already includes wind zone multiplier. For Low and Medium wind zones span is increased by (1.3).
                For High and Very High wind zones span is increased by (1.1). No span increase for Extra High wind zones.</p>
                <p className="label dark-gray mt-10"><span className="label fw-800">(2)</span> Rafter spans may be increased by 10% 
                for raters continuous over 2 or more spans that have not been birdsmouth jointed at intermediate supports.</p>
                <p className="label dark-gray mt-20"><span className="label fw-800">(3)</span> Fixing types at intermediate supports for raters 
                running continuously over those supports shall have double the capacity of the fixing types given in this table.</p>
                <p className="label dark-gray mt-20"><span className="label fw-800">(4)</span> Members 90mm thick may be substituted with built-up 
                members sized and nailed in accordance with 2.4.4.7 of 3604:2011.</p>
                <p className="label dark-gray mt-20"><span className="label fw-800">(5)</span> Rafter spacing of 1200mm does not include heavy roofs.</p>
            </CardSmallalt>
        </div>
    )
};

export default Rafters;