import React, {useState} from "react";
import CardSmallalt from "../../../components/CardSmallalt";

const LintelsRoofWall = () => {
    const [lintelRoofWallSize, setLintelRoofWallSize] = useState();

    const lightRoofWallArr = [
        [1000, 1100, 1600, 1800, 2200, 2400, 2800, 3100, 3400, 3700],
        [1000, 1100, 1500, 1700, 2100, 2300, 2700, 2900, 3200, 3500],
        [900,  1000, 1400, 1600, 2000, 2200, 2500, 2700, 3000, 3300],
        [800,   900, 1300, 1400, 1800, 2000, 2300, 2500, 2700, 3000]
    ]

    const lightRoofMedWallArr = [
        [900,  1000, 1500, 1600, 2000, 2200, 2500, 2700, 3100, 3300],
        [900,  1000, 1400, 1500, 1900, 2100, 2400, 2600, 2900, 3200],
        [700,   800, 1100, 1200, 1500, 1700, 1900, 2100, 2300, 2600],
        [600,   700, 1000, 1100, 1300, 1500, 1700, 1900, 2000, 2400]
    ]

    const heavyRoofLightWallArr = [
        [900, 900, 1400, 1500, 1900, 2000, 2400, 2600, 2900, 3100],
        [800, 900, 1300, 1400, 1700, 1900, 2200, 2400, 2700, 2900],
        [700, 800, 1200, 1300, 1600, 1800, 2100, 2200, 2500, 2700],
        [600, 700, 1000, 1200, 1400, 1600, 1800, 2000, 2100, 2400]
    ]

    const heavyRoofMedWallArr = [
        [800, 900, 1200, 1400, 1700, 1900, 2200, 2400, 2700, 2900],
        [700, 800, 1200, 1300, 1600, 1800, 2100, 2300, 2500, 2700],
        [700, 800, 1100, 1200, 1500, 1700, 1900, 2100, 2300, 2600],
        [600, 700, 1000, 1100, 1300, 1500, 1700, 1900, 2000, 2400]
    ]

    const loadedDimensionArr = [2, 3, 4, 6];

    const lintelSizesArr = ['90x70', '90x90', '140x70', '140x90', '190x70', '190x90', '240x70', '240x90', '290x70', '290x90'];

    const lintelSizeHandler = () => {
        const roofWallWeight = document.querySelector('#roofWallWeight2').value;
        const loadedDimension = document.querySelector('#loadedDimension2').value;
        const lintelSpan = document.querySelector('#lintelSpan2').value;

        if(roofWallWeight == "LRLW") {
            for(let i = 0; i < loadedDimensionArr.length; i++){
                if(loadedDimensionArr[i] == loadedDimension) {
                    for(let j = 0; j < 4; j++) {
                        for(let k = 0; k < 10; k++) {
                            if(lintelSpan == lightRoofWallArr[i][k]) {
                                setLintelRoofWallSize(lintelSizesArr[k]);
                                break;
                            } else if(lightRoofWallArr[i][k] == lightRoofWallArr[i][0] && lintelSpan < lightRoofWallArr[i][0]){
                                setLintelRoofWallSize(lintelSizesArr[0]);
                                break;
                            } else if(lintelSpan > lightRoofWallArr[i][k] && lintelSpan <= lightRoofWallArr[i][k + 1]) {
                                setLintelRoofWallSize(lintelSizesArr[k + 1]);
                                break;
                            } else if(lintelSpan > lightRoofWallArr[i][9]){
                                setLintelRoofWallSize("None");
                            }
                        }
                    }
                    break;
                }
            }

            if(lintelSpan == '') {
                setLintelRoofWallSize();
            }
        } else if(roofWallWeight == "LRMW") {
            for(let i = 0; i < loadedDimensionArr.length; i++){
                if(loadedDimensionArr[i] == loadedDimension) {
                    for(let j = 0; j < 4; j++) {
                        for(let k = 0; k < 10; k++) {
                            if(lintelSpan == lightRoofMedWallArr[i][k]) {
                                setLintelRoofWallSize(lintelSizesArr[k]);
                                break;
                            } else if(lightRoofMedWallArr[i][k] == lightRoofMedWallArr[i][0] && lintelSpan < lightRoofMedWallArr[i][0]){
                                setLintelRoofWallSize(lintelSizesArr[0]);
                                break;
                            } else if(lintelSpan > lightRoofMedWallArr[i][k] && lintelSpan <= lightRoofMedWallArr[i][k + 1]) {
                                setLintelRoofWallSize(lintelSizesArr[k + 1]);
                                break;
                            } else if(lintelSpan > lightRoofMedWallArr[i][9]){
                                setLintelRoofWallSize("None");
                            }
                        }
                    }
                    break;
                }
            }

            if(lintelSpan == '') {
                setLintelRoofWallSize();
            }
        } else if(roofWallWeight == "HRLW") {
            for(let i = 0; i < loadedDimensionArr.length; i++){
                if(loadedDimensionArr[i] == loadedDimension) {
                    for(let j = 0; j < 4; j++) {
                        for(let k = 0; k < 10; k++) {
                            if(lintelSpan == heavyRoofLightWallArr[i][k]) {
                                setLintelRoofWallSize(lintelSizesArr[k]);
                                break;
                            } else if(heavyRoofLightWallArr[i][k] == heavyRoofLightWallArr[i][0] && lintelSpan < heavyRoofLightWallArr[i][0]){
                                setLintelRoofWallSize(lintelSizesArr[0]);
                                break;
                            } else if(lintelSpan > heavyRoofLightWallArr[i][k] && lintelSpan <= heavyRoofLightWallArr[i][k + 1]) {
                                setLintelRoofWallSize(lintelSizesArr[k + 1]);
                                break;
                            } else if(lintelSpan > heavyRoofLightWallArr[i][9]){
                                setLintelRoofWallSize("None");
                            }
                        }
                    }
                    break;
                }
            }

            if(lintelSpan == '') {
                setLintelRoofWallSize();
            }
        } else if(roofWallWeight == "HRMW") {
            for(let i = 0; i < loadedDimensionArr.length; i++){
                if(loadedDimensionArr[i] == loadedDimension) {
                    for(let j = 0; j < 4; j++) {
                        for(let k = 0; k < 10; k++) {
                            if(lintelSpan == heavyRoofMedWallArr[i][k]) {
                                setLintelRoofWallSize(lintelSizesArr[k]);
                                break;
                            } else if(heavyRoofMedWallArr[i][k] == heavyRoofMedWallArr[i][0] && lintelSpan < heavyRoofMedWallArr[i][0]){
                                setLintelRoofWallSize(lintelSizesArr[0]);
                                break;
                            } else if(lintelSpan > heavyRoofMedWallArr[i][k] && lintelSpan <= heavyRoofMedWallArr[i][k + 1]) {
                                setLintelRoofWallSize(lintelSizesArr[k + 1]);
                                break;
                            } else if(lintelSpan > heavyRoofMedWallArr[i][9]){
                                setLintelRoofWallSize("None");
                            }
                        }
                    }
                    break;
                }
            }

            if(lintelSpan == '') {
                setLintelRoofWallSize();
            }
        }
    }

    return (
        <div>
            <h4 className="h5 pl-10 blue fw-700" style={{width: 320}} >Lintels Supporting Roof And Wall SG8</h4>
            <CardSmallalt>
                <div onChange={lintelSizeHandler}>
                    <div className="flex-row mb-20">
                        <p className="body dark-gray">Roof & Wall Weight</p>
                        <select className="select-md label select-overflow select-height" id="roofWallWeight2">
                            <option value="LRLW">Light Roof & Light Wall</option>
                            <option value="LRMW">Light Roof & Medium Wall</option>
                            <option value="HRLW">Heavy Roof & Light Wall</option>
                            <option value="HRMW">Heavy Roof & Medium Wall</option>
                        </select>
                    </div>
                    <div className="flex-row mb-20">
                        <p className="body dark-gray label-text-width_sm">Max Loaded Dimenion of Lintel (m)</p>
                        <select className="select-md label" id="loadedDimension2">
                            <option value="2">2.0m</option>
                            <option value="3">3.0m</option>
                            <option value="4">4.0m</option>
                            <option value="6">6.0m</option>
                        </select>
                    </div>
                    <div className="flex-row mb-20">
                        <p className="body dark-gray">Max Lintel Span (mm)</p>
                        <input type="number" className="input-md label" id="lintelSpan2"></input>
                    </div>
                </div>
                <div className="mb-20 mt-30 flex">
                    <h5 className="h5-0mg fw-700 mb-10">Allowed Lintel Size: </h5>
                    <h5 className="result-text_md blue fw-800 mb-10">{lintelRoofWallSize}</h5>
                </div>
                <p className="label fw-870 mt-20">Note:</p>
                <p className="label dark-gray mt-10"><span className="label fw-800">(1)</span> Determine the loaded dimension of the Wall
                above the lintel at roof level and use this value in the table.</p>
                <p className="label dark-gray mt-10"><span className="label fw-800">(2)</span> Members 70mm and 90mm thick may be 
                substitutedwith built-up members sized and nailed in accordance with 2.4.4.7</p>

            </CardSmallalt>
        </div>
    )
};

export default LintelsRoofWall;