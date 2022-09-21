import React, {useState} from "react";
import CardSmallalt from "../../../components/CardSmallalt";

const Bearers = () => {
    const [firstBearerOpt, setFirstBearerOpt] = useState();
    const [secondBearerOpt, setSecondBearerOpt] = useState();
    const [thirdBearerOpt, setThirdBearerOpt] = useState();

    const dryBearersArr = [
        ["90x70", "90x90", "140x70", "140x90", "190x70"],
        ["140x70", "140x90", "190x70"],
        ["140x70", "140x90", "190x70"]
    ]

    const dryBearerLoadedDimArr = [
        [1.5, 1.9, 3.6, 4.6, 6.6],
        [2.2, 2.8, 4.1],
        [1.5, 1.9, 2.8]
    ]

    const wetBearerArr = [
        ["90x90", "140x70", "140x90", "190x70"],
        ["90x90", "140x70", "140x90", "190x70"],
        ["140x90", "190x70"]
    ]

    const wetBearerLoadedDimArr = [
        [1.2, 2.3, 3.0, 4.3],
        [0.7, 1.4, 1.8, 2.7],
        [1.2, 1.8]
    ]

    const bearerSizeHandler = () => {
        const floorLoad = document.querySelector('#bearerFloorLoad').value;
        const loadedDimension = document.querySelector('#bearerLoadedDimension').value;

        if(floorLoad == 1){
            //Loop to find bearer size with a LD of 1.30m
            for(let i = 0; i < 5; i++){
                if(loadedDimension == dryBearerLoadedDimArr[0][i]){
                    setFirstBearerOpt(dryBearersArr[0][i]);
                    break;
                } else if(dryBearerLoadedDimArr[0][i] == dryBearerLoadedDimArr[0][0] && loadedDimension < dryBearerLoadedDimArr[0][0]) {
                    setFirstBearerOpt(dryBearersArr[0][0]);
                } else if(loadedDimension > dryBearerLoadedDimArr[0][i] && loadedDimension < dryBearerLoadedDimArr[0][i + 1]){
                    setFirstBearerOpt(dryBearersArr[0][i + 1]);
                } else if(loadedDimension > dryBearerLoadedDimArr[0][4]) {
                    setFirstBearerOpt("None");
                }
            }

            //Loop to find bearer size with a LD of 1.65m
            for(let i = 0; i < 3; i++){
                if(loadedDimension == dryBearerLoadedDimArr[1][i]){
                    setSecondBearerOpt(dryBearersArr[1][i]);
                    break;
                } else if(dryBearerLoadedDimArr[1][i] == dryBearerLoadedDimArr[1][0] && loadedDimension < dryBearerLoadedDimArr[1][0]) {
                    setSecondBearerOpt(dryBearersArr[1][0]);
                } else if(loadedDimension > dryBearerLoadedDimArr[1][i] && loadedDimension < dryBearerLoadedDimArr[1][i + 1]){
                    setSecondBearerOpt(dryBearersArr[1][i + 1]);
                } else if(loadedDimension > dryBearerLoadedDimArr[1][2]) {
                    setSecondBearerOpt("None");
                }
            }

            //Loop to find bearer size with a LD of 2.00m
            for(let i = 0; i < 3; i++){
                if(loadedDimension == dryBearerLoadedDimArr[2][i]){
                    setThirdBearerOpt(dryBearersArr[2][i]);
                    break;
                } else if(dryBearerLoadedDimArr[2][i] == dryBearerLoadedDimArr[2][0] && loadedDimension < dryBearerLoadedDimArr[2][0]) {
                    setThirdBearerOpt(dryBearersArr[2][0]);
                } else if(loadedDimension > dryBearerLoadedDimArr[2][i] && loadedDimension < dryBearerLoadedDimArr[2][i + 1]){
                    setThirdBearerOpt(dryBearersArr[2][i + 1]);
                } else if(loadedDimension > dryBearerLoadedDimArr[2][2]) {
                    setThirdBearerOpt("None");
                }
            }

        } else if(floorLoad == 2){
            //Loop to find bearer size with a LD of 1.30m
            for(let i = 0; i < 4; i++){
                if(loadedDimension == wetBearerLoadedDimArr[0][i]){
                    setFirstBearerOpt(wetBearerArr[0][i]);
                    break;
                } else if(wetBearerLoadedDimArr[0][i] == wetBearerLoadedDimArr[0][0] && loadedDimension < wetBearerLoadedDimArr[0][0]) {
                    setFirstBearerOpt(wetBearerArr[0][0]);
                } else if(loadedDimension > wetBearerLoadedDimArr[0][i] && loadedDimension < wetBearerLoadedDimArr[0][i + 1]){
                    setFirstBearerOpt(wetBearerArr[0][i + 1]);
                } else if(loadedDimension > wetBearerLoadedDimArr[0][3]) {
                    setFirstBearerOpt("None");
                }
            }

            //Loop to find bearer size with a LD of 1.65m
            for(let i = 0; i < 4; i++){
                if(loadedDimension == wetBearerLoadedDimArr[1][i]){
                    setSecondBearerOpt(wetBearerArr[1][i]);
                    break;
                } else if(wetBearerLoadedDimArr[1][i] == wetBearerLoadedDimArr[1][0] && loadedDimension < wetBearerLoadedDimArr[1][0]) {
                    setSecondBearerOpt(wetBearerArr[1][0]);
                } else if(loadedDimension > wetBearerLoadedDimArr[1][i] && loadedDimension < wetBearerLoadedDimArr[1][i + 1]){
                    setSecondBearerOpt(wetBearerArr[1][i + 1]);
                } else if(loadedDimension > wetBearerLoadedDimArr[1][3]) {
                    setSecondBearerOpt("None");
                }
            }

            //Loop to find bearer size with a LD of 2.00m
            for(let i = 0; i < 2; i++){
                if(loadedDimension == wetBearerLoadedDimArr[2][i]){
                    setThirdBearerOpt(wetBearerArr[2][i]);
                    break;
                } else if(wetBearerLoadedDimArr[2][i] == wetBearerLoadedDimArr[2][0] && loadedDimension < wetBearerLoadedDimArr[2][0]) {
                    setThirdBearerOpt(wetBearerArr[2][0]);
                } else if(loadedDimension > wetBearerLoadedDimArr[2][i] && loadedDimension < wetBearerLoadedDimArr[2][i + 1]){
                    setThirdBearerOpt(wetBearerArr[2][i + 1]);
                } else if(loadedDimension > wetBearerLoadedDimArr[2][1]) {
                    setThirdBearerOpt("None");
                }
            }
        }

        
        if(loadedDimension == '') {
            setFirstBearerOpt();
            setSecondBearerOpt();
            setThirdBearerOpt();
        }
    }


    return (
        <div>   
            <h4 className="h5 pl-10 fw-900 black">Bearers SG8</h4>
            <CardSmallalt>
                <div onChange={bearerSizeHandler}>
                    <div className="flex-row">
                        <p className="body black">Floor Load</p>
                        <select className="select-sm label dark-gray" id="bearerFloorLoad">
                            <option value="1">1.5kPa</option>
                            <option value="2">2.0kPa</option>
                        </select>
                    </div>
                    <div className="flex-row mt-20 mb-20">
                        <p className="body black">Loaded Dimension* of bearer</p>
                        <input type="number" className="input-md label" id="bearerLoadedDimension"></input>
                    </div>
                </div>


                <table className="table-sm text-center">
                        <thead>
                            <tr>
                                <th><p className="label__window fw-800">Max Span</p></th>
                                <th><p className="label__window fw-800">Bearer Size</p></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><p className="body fw-800">1.30m</p></td>
                                <td><p className="body bright-blue fw-800">{firstBearerOpt}</p></td>
                            </tr>
                            <tr>
                                <td><p className="body fw-800">1.65m</p></td>
                                <td><p className="body bright-blue fw-800">{secondBearerOpt}</p></td>
                            </tr>
                            <tr>
                                <td><p className="body fw-800">2.0m</p></td>
                                <td><p className="body bright-blue fw-800">{thirdBearerOpt}</p></td>
                            </tr>
                        </tbody>
                    </table>

                <p className="label black fw-800 mt-20">Note:</p>
                <p className="label black mt-10">*For definition of loaded dimension see 1.3 of NZS3604:2011</p>
                <p className="label black mt-10">Members 70mm and 90mm thick may be 
                substitutedwith built-up members sized and nailed in accordance with 2.4.4.7</p>
            </CardSmallalt>
        </div>
    )
}

export default Bearers;