import React, {useState} from "react";
import CardSmallalt from "../../../components/CardSmallalt";

const LintelsWallFloor = () => {
    const [lintelWallFloorSize, setLintelWallFloorSize] = useState();

    const lightWallArr = [1100, 1400, 1600, 1900, 2000, 2400, 2400, 2900]
    const mediumWallArr = [1100, 1400, 1500, 1900, 1900, 2400, 2300, 2800]
    const lintelSizesArr = ['140x70', '140x90', '190x70', '190x90', '240x70', '240x90', '290x70', '290x90']

    const lintelSizeHandler = () => {
        const wallWeight = document.querySelector('#wallWeight').value;
        const lintelSpan = document.querySelector('#lintelSpan4').value;

        if(wallWeight == "LW"){
            for(let i = 0; i < lightWallArr.length; i++) {
                if(lintelSpan == lightWallArr[i]) {
                    setLintelWallFloorSize(lintelSizesArr[i]);
                    break;
                } else if(lightWallArr[i] == lightWallArr[0] && lintelSpan < lightWallArr[i]){
                    setLintelWallFloorSize(lintelSizesArr[0]);
                    break;
                } else if(lintelSpan > lightWallArr[i] && lintelSpan < lightWallArr[i + 1]) {
                    setLintelWallFloorSize(lintelSizesArr[i + 1]);
                    break;
                } else if(lintelSpan > lightWallArr[7]){
                    setLintelWallFloorSize("None");
                }
            }
            if(lintelSpan == '') {
                setLintelWallFloorSize();
            }
        } else if(wallWeight == "MW"){
            for(let i = 0; i < mediumWallArr.length; i++) {
                if(lintelSpan == mediumWallArr[i]) {
                    setLintelWallFloorSize(lintelSizesArr[i]);
                    break;
                } else if(mediumWallArr[i] == mediumWallArr[0] && lintelSpan < mediumWallArr[i]){
                    setLintelWallFloorSize(lintelSizesArr[0]);
                    break;
                } else if(lintelSpan > mediumWallArr[i] && lintelSpan < mediumWallArr[i + 1]) {
                    setLintelWallFloorSize(lintelSizesArr[i + 1]);
                    break;
                } else if(lintelSpan > mediumWallArr[7]){
                    setLintelWallFloorSize("None");
                }
            }
            if(lintelSpan == '') {
                setLintelWallFloorSize();
            }
        }
    }

    return (
        <div>
            <h4 className="h5 pl-10 fw-900 black" style={{width: 320}}>Lintels Supporting Wall & Floor SG8</h4>
            <CardSmallalt>
                <div onChange={lintelSizeHandler}>
                    <div className="flex-row mb-20">
                        <p className="body black">Wall Weight</p>
                        <select className="select-md label dark-gray select-overflow" id="wallWeight" style={{width: 140}}>
                            <option value="LW">Light Wall</option>
                            <option value="MW">Medium Wall</option>
                        </select>
                    </div>
                    <div className="flex-row mb-20">
                        <p className="body black">Max Loaded Dimenion of Lintel (m)</p>
                        <select className="select-md label dark-gray">
                            <option value="3">3.0m</option>
                        </select>
                    </div>
                    <div className="flex-row">
                        <p className="body black">Max Lintel Span (mm)</p>
                        <input type="number" className="input-md label" id="lintelSpan4"></input>
                    </div>
                </div>

                <div className="mb-20 mt-30 flex-row">
                    <h5 className="h5-0mg fw-900 black mb-10">Allowed Lintel Size: </h5>
                    <h5 className="h5-0mg fw-900 bright-blue mb-10">{lintelWallFloorSize}</h5>
                </div>
                <p className="label black fw-800 mt-20">Note:</p>
                <p className="label black mt-10">Members 70mm and 90mm thick may be 
                substitutedwith built-up members sized and nailed in accordance with 2.4.4.7</p>

            </CardSmallalt>
        </div>
    )
};

export default LintelsWallFloor;