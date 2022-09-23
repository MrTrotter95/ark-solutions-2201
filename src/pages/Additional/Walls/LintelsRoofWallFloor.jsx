import React, {useState} from "react";
import CardSmallalt from "../../../components/CardSmallalt";

const LintelsRoofWallFloor = () => {
    const [lintelRoofWallFloorSize, setLintelRoofWallFloorSize] = useState();

    const lightRoofWallArr = [
        [1000, 1200, 1400, 1700, 1800, 2100, 2100, 2600],
        [1000, 1200, 1300, 1600, 1700, 2100, 2100, 2500],
        [900,  1100, 1300, 1600, 1600, 2000, 2000, 2400],
        [900,  1100, 1200, 1500, 1500, 1900, 1900, 2300]
    ]

    const lightRoofMedWallArr = [
        [1000, 1200, 1300, 1600, 1700, 2100, 2100, 2500],
        [900,  1100, 1300, 1600, 1600, 2000, 2000, 2400],
        [800,  1000, 1100, 1400, 1500, 1800, 1800, 2100],
        [800,   900, 1100, 1300, 1300, 1600, 1600, 2000]
    ]

    const heavyRoofLightWallArr = [
        [900, 1200, 1300, 1600, 1700, 2000, 2000, 2400],
        [900, 1100, 1200, 1500, 1600, 1900, 1900, 2300],
        [900, 1000, 1200, 1400, 1500, 1800, 1800, 2200],
        [800, 1000, 1100, 1300, 1400, 1700, 1700, 2000]
    ]

    const heavyRoofMedWallArr = [
        [900, 1100, 1300, 1500, 1600, 1900, 1900, 2400],
        [900, 1100, 1200, 1500, 1500, 1900, 1800, 2200],
        [800, 1000, 1100, 1400, 1500, 1800, 1800, 2100],
        [800,  900, 1100, 1300, 1300, 1800, 1600, 2000]
    ]

    const loadedDimensionArr = [2, 3, 4, 6];

    const lintelSizesArr = ['140x70', '140x90', '190x70', '190x90', '240x70', '240x90', '290x70', '290x90'];

    const lintelSizeHandler = () => {
        const roofWallWeight = document.querySelector('#roofWallWeight3').value;
        const loadedDimension = document.querySelector('#loadedDimension3').value;
        const lintelSpan = document.querySelector('#lintelSpan3').value;

        if(roofWallWeight == "LRLW"){
            for(let i = 0; i < loadedDimensionArr.length; i++){
                if(loadedDimensionArr[i] == loadedDimension) {
                    for(let j = 0; j < 4; j++) {
                        for(let k = 0; k < 8; k++) {
                            if(lintelSpan == lightRoofWallArr[i][k]) {
                                setLintelRoofWallFloorSize(lintelSizesArr[k]);
                                break;
                            } else if(lightRoofWallArr[i][k] == lightRoofWallArr[i][0] && lintelSpan < lightRoofWallArr[i][0]){
                                setLintelRoofWallFloorSize(lintelSizesArr[0]);
                                break;
                            } else if(lintelSpan > lightRoofWallArr[i][k] && lintelSpan <= lightRoofWallArr[i][k + 1]) {
                                setLintelRoofWallFloorSize(lintelSizesArr[k + 1]);
                                break;
                            } else if(lintelSpan > lightRoofWallArr[i][7]){
                                setLintelRoofWallFloorSize("None");
                            }
                        }
                    }
                    break;
                }
            }

            if(lintelSpan == '') {
                setLintelRoofWallFloorSize();
            }
        } else if(roofWallWeight == "LRMW"){
            for(let i = 0; i < loadedDimensionArr.length; i++){
                if(loadedDimensionArr[i] == loadedDimension) {
                    for(let j = 0; j < 4; j++) {
                        for(let k = 0; k < 8; k++) {
                            if(lintelSpan == lightRoofMedWallArr[i][k]) {
                                setLintelRoofWallFloorSize(lintelSizesArr[k]);
                                break;
                            } else if(lightRoofMedWallArr[i][k] == lightRoofMedWallArr[i][0] && lintelSpan < lightRoofMedWallArr[i][0]){
                                setLintelRoofWallFloorSize(lintelSizesArr[0]);
                                break;
                            } else if(lintelSpan > lightRoofMedWallArr[i][k] && lintelSpan <= lightRoofMedWallArr[i][k + 1]) {
                                setLintelRoofWallFloorSize(lintelSizesArr[k + 1]);
                                break;
                            } else if(lintelSpan > lightRoofMedWallArr[i][7]){
                                setLintelRoofWallFloorSize("None");
                            }
                        }
                    }
                    break;
                }
            }

            if(lintelSpan == '') {
                setLintelRoofWallFloorSize();
            }
        } else if(roofWallWeight == "HRLW"){
            for(let i = 0; i < loadedDimensionArr.length; i++){
                if(loadedDimensionArr[i] == loadedDimension) {
                    for(let j = 0; j < 4; j++) {
                        for(let k = 0; k < 8; k++) {
                            if(lintelSpan == heavyRoofLightWallArr[i][k]) {
                                setLintelRoofWallFloorSize(lintelSizesArr[k]);
                                break;
                            } else if(heavyRoofLightWallArr[i][k] == heavyRoofLightWallArr[i][0] && lintelSpan < heavyRoofLightWallArr[i][0]){
                                setLintelRoofWallFloorSize(lintelSizesArr[0]);
                                break;
                            } else if(lintelSpan > heavyRoofLightWallArr[i][k] && lintelSpan <= heavyRoofLightWallArr[i][k + 1]) {
                                setLintelRoofWallFloorSize(lintelSizesArr[k + 1]);
                                break;
                            } else if(lintelSpan > heavyRoofLightWallArr[i][7]){
                                setLintelRoofWallFloorSize("None");
                            }
                        }
                    }
                    break;
                }
            }

            if(lintelSpan == '') {
                setLintelRoofWallFloorSize();
            }
        } else if(roofWallWeight == "HRMW"){
            for(let i = 0; i < loadedDimensionArr.length; i++){
                if(loadedDimensionArr[i] == loadedDimension) {
                    for(let j = 0; j < 4; j++) {
                        for(let k = 0; k < 8; k++) {
                            if(lintelSpan == heavyRoofMedWallArr[i][k]) {
                                setLintelRoofWallFloorSize(lintelSizesArr[k]);
                                break;
                            } else if(heavyRoofMedWallArr[i][k] == heavyRoofMedWallArr[i][0] && lintelSpan < heavyRoofMedWallArr[i][0]){
                                setLintelRoofWallFloorSize(lintelSizesArr[0]);
                                break;
                            } else if(lintelSpan > heavyRoofMedWallArr[i][k] && lintelSpan <= heavyRoofMedWallArr[i][k + 1]) {
                                setLintelRoofWallFloorSize(lintelSizesArr[k + 1]);
                                break;
                            } else if(lintelSpan > heavyRoofMedWallArr[i][7]){
                                setLintelRoofWallFloorSize("None");
                            }
                        }
                    }
                    break;
                }
            }

            if(lintelSpan == '') {
                setLintelRoofWallFloorSize();
            }
        }
    }

    return (
        <div>
            <h4 className="h5 pl-10 dt-blue fw-800" style={{width: 320}}>Lintels Supporting Roof, Wall & Floor SG8</h4>
            <CardSmallalt>
                <div onChange={lintelSizeHandler}>
                    <div className="flex-row mb-20">
                        <p className="body dt-gray">Roof & Wall Weight</p>
                        <select className="select-md label select-overflow select-height" id="roofWallWeight3" style={{width: 140}}>
                            <option value="LRLW">Light Roof & Light Wall</option>
                            <option value="LRMW">Light Roof & Medium Wall</option>
                            <option value="HRLW">Heavy Roof & Light Wall</option>
                            <option value="HRMW">Heavy Roof & Medium Wall</option>
                        </select>
                    </div>
                    <div className="flex-row mb-20">
                        <p className="body dt-gray">Max Loaded Dimenion of Lintel (m)</p>
                        <select className="select-md label" id="loadedDimension3">
                            <option value="2">2.0m</option>
                            <option value="3">3.0m</option>
                            <option value="4">4.0m</option>
                            <option value="6">6.0m</option>
                        </select>
                    </div>
                    <div className="flex-row">
                        <p className="body dt-gray">Max Lintel Span (mm)</p>
                        <input type="number" className="input-md label" id="lintelSpan3"></input>
                    </div>
                </div>
                <div className="mb-20 mt-30 flex-row">
                    <h5 className="h5-0mg dt-white fw-800 mb-10">Allowed Lintel Size: </h5>
                    <h5 className="result-text_md dt-blue fw-800  mb-10">{lintelRoofWallFloorSize}</h5>
                </div>
                <p className="label dt-white fw-700 mt-20">Note:</p>
                <p className="label dt-gray mt-10"><span className="label fw-800">(1)</span> Determine the loaded dimension of the Wall
                above the lintel at roof level and use this value in the table.</p>
                <p className="label dt-gray mt-10"><span className="label fw-800">(2)</span> Members 70mm and 90mm thick may be 
                substitutedwith built-up members sized and nailed in accordance with 2.4.4.7</p>

            </CardSmallalt>
        </div>
    )
};

export default LintelsRoofWallFloor;