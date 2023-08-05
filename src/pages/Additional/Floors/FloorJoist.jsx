import React, {useState} from "react";
import CardSmallalt from "../../../components/CardSmallalt";

const FloorJoist = () => {
    const [fourHundredCrs, setFourHundredCrs] = useState(1.45);
    const [fourFiftyCrs, setFourFiftyCrs] = useState(1.40);
    const [sixHundredCrs, setSixHundredCrs] = useState(1.25);

    const oneFiveKpaArr = [
        [1, 1.45, 1.40, 1.25],
        [2, 2.10, 2.00, 1.80],
        [3, 2.70, 2.60, 2.0],
        [4, 3.55, 3.45, 3.15],
        [5, 4.40, 4.30, 3.90],
        [6, 5.20, 5.05, 4.60]
    ];

    const twoKpaArr = [
        [1, 1.60, 1.50, 1.30],
        [2, 2.20, 2.05, 1.80],
        [3, 2.50, 2.35, 2.05],
        [4, 3.40, 3.20, 2.75],
        [5, 4.30, 4.05, 3.50],
        [6, 5.20, 4.90, 4.25]
    ]

    
    const JoistHandler = () => {
        const floorLoad = document.querySelector('#floorLoad').value;
        const joistSize = document.querySelector('#joistSize').value;

        if(floorLoad == 1.5) {
            for(let i = 0; i < oneFiveKpaArr.length; i++) {
                    if(joistSize == oneFiveKpaArr[i][0]) {
                        setFourHundredCrs(oneFiveKpaArr[i][1]);
                        setFourFiftyCrs(oneFiveKpaArr[i][2]);
                        setSixHundredCrs(oneFiveKpaArr[i][3]);
                    }
            }
        } else if(floorLoad == 2.0) {
            for(let i = 0; i < twoKpaArr.length; i++) {
                if(joistSize == twoKpaArr[i][0]) {
                    setFourHundredCrs(twoKpaArr[i][1]);
                    setFourFiftyCrs(twoKpaArr[i][2]);
                    setSixHundredCrs(twoKpaArr[i][3]);
                }
            }
        } else {
            setFourHundredCrs("error");
            setFourFiftyCrs("error");
            setSixHundredCrs("error");
        }
    }

    return (
        <div>  
            <h4 className="h5 blue fw-700 pl-10">Floor Joists SG8</h4>
            <CardSmallalt>
                <div onChange={JoistHandler}>
                    <div className="flex-row">
                        <p className="body dark-gray">Floor Load</p>
                        <select className="select-sm label" id="floorLoad">
                            <option value="1.5">1.5kPa</option>
                            <option value="2.0">2.0kPa</option>
                        </select>
                    </div>
                    <div className="flex-row mt-20">
                        <p className="body dark-gray">Joist Size</p>
                        <select className="select-sm label" id="joistSize">
                            <option value="1">90x45</option>
                            <option value="2">140x35</option>
                            <option value="3">140x45</option>
                            <option value="4">190x45</option>
                            <option value="5">240x45</option>
                            <option value="6">290x45</option>
                        </select>
                    </div>
                </div>

                <div className="mb-20 mt-30">
                <h5 className="h5-0mg fw-700 mb-10">Available Options</h5>
                <p className="label dark-gray mb-10">Maximum span of joists(m) at a maximum spacing(mm) of:</p>
                    <table className="table-sm text-center">
                        <thead>
                            <tr>
                                <th><p className="label__window  fw-700">Centres</p></th>
                                <th><p className="label__window  fw-700">400mm</p></th>
                                <th><p className="label__window  fw-700">600mm</p></th>
                                <th><p className="label__window  fw-700">450mm</p></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><p className="label__window  fw-700">Max span</p></td>
                                <td><p className="result-text_sm blue fw-700">{fourHundredCrs}m</p></td>
                                <td><p className="result-text_sm blue fw-700">{fourFiftyCrs}m</p></td>
                                <td><p className="result-text_sm blue fw-700">{sixHundredCrs}m</p></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <p className="label-bold fw-700 mt-20">Note:</p>
                <p className="label dark-gray mt-10">Spans may be increased by 10% for joists
                continuous over 2 or more spans.</p>
            </CardSmallalt>
        </div>
    )
}

export default FloorJoist;