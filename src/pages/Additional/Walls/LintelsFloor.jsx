import React, {useState} from "react";
import CardSmallalt from "../../../components/CardSmallalt";

const LintelsFloor = () => {
    const [lintelFloorSize, setLintelFloorSize] = useState();

    const lintelsArr = [
        [1500, 1800, 2000, 2400, 2600, 3100, 3100, 3700],
        [1000, 1300, 1400, 1700, 1800, 2200, 2200, 2700],
        [800,  1000, 1200, 1400, 1500, 1800, 1800, 2200]
    ]

    const loadedDimensionArr = [2, 4, 6]
    const lintelSizesArr = ['140x70', '140x90', '190x70', '190x90', '240x70', '240x90', '290x70', '290x90']

    const lintelSizeHandler = () => {
        const loadedDimension = document.querySelector('#loadedDimension5').value;
        const lintelSpan = document.querySelector('#lintelSpan5').value;

        for(let i = 0; i < loadedDimensionArr.length; i++){
            if(loadedDimensionArr[i] == loadedDimension) {
                console.log("test1");
                for(let j = 0; j < 8; j++) {
                    if(lintelSpan == lintelsArr[i][j]) {
                        setLintelFloorSize(lintelSizesArr[j]);
                        break;
                    } else if(lintelsArr[i][j] == lintelsArr[i][0] && lintelSpan < lintelsArr[i][0]){
                        setLintelFloorSize(lintelSizesArr[0]);
                        break;
                    } else if(lintelSpan > lintelsArr[i][j] && lintelSpan <= lintelsArr[i][j + 1]) {
                        setLintelFloorSize(lintelSizesArr[j + 1]);
                        break;
                    } else if(lintelSpan > lintelsArr[i][7]){
                        setLintelFloorSize("None");
                    }
                }
                break;
            }
        }

        if(lintelSpan == '') {
            setLintelFloorSize();
        }
    }

    return (
        <div>
            <h4 className="h5 pl-10 blue fw-700">Lintels Supporting Floor Only SG8</h4>
            <CardSmallalt>
                <div onChange={lintelSizeHandler}>
                    <div className="flex-row mb-20">
                        <p className="body dark-gray label-text-width_sm">Max Loaded Dimenion of Lintel (m)</p>
                        <select className="select-md select-width label " id="loadedDimension5">
                            <option value="2">2.0m</option>
                            <option value="4">4.0m</option>
                            <option value="6">6.0m</option>
                        </select>
                    </div>
                    <div className="flex-row">
                        <p className="body dark-gray">Max Lintel Span (mm)</p>
                        <input type="number" className="input-md label" id="lintelSpan5"></input>
                    </div>
                </div>
                <div className="mb-20 mt-30 flex">
                    <h5 className="h5-0mg fw-700 mb-10">Allowed Lintel Size: </h5>
                    <h5 className="result-text_md blue fw-800  mb-10">{lintelFloorSize}</h5>
                </div>
                <p className="label  fw-700 mt-20">Note:</p>
                <p className="label dark-gray mt-10">Members 70mm and 90mm thick may be 
                substitutedwith built-up members sized and nailed in accordance with 2.4.4.7</p>
            </CardSmallalt>
        </div>
    )
};

export default LintelsFloor;