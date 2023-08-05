import React, {useState} from "react";
import CardSmallalt from "../../../components/CardSmallalt";

const LintelSingleOrTop = () => {
    const [lintelSize, setLintelSize] = useState();

    const lightRoofArr = [
        [1200, 1400, 2000, 2100, 2700, 2900, 3400, 3600, 4000, 4200],
        [1100, 1200, 1700, 1900, 2400, 2600, 3000, 3300, 3700, 3900],
        [1000, 1100, 1500, 1800, 2100, 2400, 2700, 3100, 3200, 3700],
        [800,  1000, 1300, 1600, 1800, 2100, 2200, 2700, 2700, 3300]
    ];

    const heavyRoofArr = [
        [1000, 1000, 1500, 1600, 2100, 2300, 2600, 2900, 3200, 3500],
        [900,   900, 1400, 1500, 1900, 2000, 2400, 2600, 2900, 3100],
        [800,   900, 1300, 1400, 1700, 1900, 2200, 2400, 2600, 2900],
        [700,   800, 1100, 1200, 1500, 1700, 1900, 2100, 2300, 2600]
    ];

    const loadedDimensionArr = [2, 3, 4, 6];

    const lintelSizesArr = ['90x70', '90x90', '140x70', '140x90', '190x70', '190x90', '240x70', '240x90', '290x70', '290x90'];

    const lintelSizeHandler = () => {
        console.log("test");
        const roofWeight = document.querySelector("#roofWeight").value;
        const loadedDimension = document.querySelector('#loadedDimension').value;
        const lintelSpan = document.querySelector('#lintelSpan').value;

        if(roofWeight == "light"){
            for(let i = 0; i < loadedDimensionArr.length; i++){
                if(loadedDimensionArr[i] == loadedDimension) {
                    for(let j = 0; j < 4; j++) {
                        for(let k = 0; k < 10; k++) {
                            if(lintelSpan == lightRoofArr[i][k]) {
                                setLintelSize(lintelSizesArr[k]);
                                break;
                            } else if(lightRoofArr[i][k] == lightRoofArr[i][0] && lintelSpan < lightRoofArr[i][0]){
                                setLintelSize(lintelSizesArr[0]);
                                break;
                            } else if(lintelSpan > lightRoofArr[i][k] && lintelSpan <= lightRoofArr[i][k + 1]) {
                                setLintelSize(lintelSizesArr[k + 1]);
                                break;
                            } else if(lintelSpan > lightRoofArr[i][9]){
                                setLintelSize("None");
                            }
                        }
                    }
                    break;
                }
            }

            if(lintelSpan == '') {
                setLintelSize();
            }

        } else if(roofWeight == "heavy") {
            for(let i = 0; i < loadedDimensionArr.length; i++){
                if(loadedDimensionArr[i] == loadedDimension) {
                    for(let j = 0; j < 4; j++) {
                        for(let k = 0; k < 10; k++) {
                            if(lintelSpan == heavyRoofArr[i][k]) {
                                setLintelSize(lintelSizesArr[k]);
                                break;
                            } else if(heavyRoofArr[i][k] == heavyRoofArr[i][0] && lintelSpan < heavyRoofArr[i][0]){
                                setLintelSize(lintelSizesArr[0]);
                                break;
                            } else if(lintelSpan > heavyRoofArr[i][k] && lintelSpan <= heavyRoofArr[i][k + 1]) {
                                setLintelSize(lintelSizesArr[k + 1]);
                                break;
                            } else if(lintelSpan > heavyRoofArr[i][9]){
                                setLintelSize("None");
                            }
                        }
                    }
                    break;
                }
            }

            if(lintelSpan == '') {
                setLintelSize();
            }
        }

    }

    return (
        <div>
            <h4 className="h5 blue pl-10 fw-700">Lintels Supporting Roof Only SG8</h4>
            <CardSmallalt>
                <div onChange={lintelSizeHandler}>
                    <div className="flex-row mb-20">
                        <p className="body dark-gray">Roof Weight</p>
                        <select className="select-md label" id="roofWeight">
                            <option value="light">Light Roof</option>
                            <option value="heavy">Heavy Roof</option>
                        </select>
                    </div>
                    <div className="flex-row mb-20">
                        <p className="body dark-gray label-text-width_sm">Max Loaded Dimenion of Lintel (m)</p>
                        <select className="select-md label" id="loadedDimension">
                            <option value="2">2.0m</option>
                            <option value="3">3.0m</option>
                            <option value="4">4.0m</option>
                            <option value="6">6.0m</option>
                        </select>
                    </div>
                    <div className="flex-row mb-20">
                        <p className="body dark-gray">Max Lintel Span (mm)</p>
                        <input type="number" className="input-md label" id="lintelSpan"></input>
                    </div>
                </div>

                <div className="mb-20 mt-30 flex">
                    <h5 className="h5-0mg fw-700 mb-10">Allowed Lintel Size: </h5>
                    <h5 className="result-text_md blue fw-800 mb-10">{lintelSize}</h5>
                </div>
                <p className="label fw-700 mt-20">Note:</p>
                <p className="label dark-gray mt-10">Members 70mm and 90mm thick may be 
                substitutedwith built-up members sized and nailed in accordance with 2.4.4.7</p>
            </CardSmallalt>
        </div>
    )
};

export default LintelSingleOrTop;