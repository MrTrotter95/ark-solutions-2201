import React, {useState} from "react";
import CardSmallalt from "../../components/CardSmallalt";


const PermeableSurface = () => {
    const [areaImperv, setAreaImperv] = useState(0);
    const [areaPerm, setAreaPerm] = useState(0);
    const [percentPerm, setPercentPerm] = useState(0);


    const PermeableHandler = () => {
        const siteArea = document.querySelector('#siteArea').value
        const floorArea = document.querySelector('#floorArea').value
        const imperviousArea = document.querySelector('#imperviousArea').value
    
        //Calculating Total Impervious Area
        const permeableResultOne = parseInt(floorArea) + parseInt(imperviousArea);
        setAreaImperv(permeableResultOne.toFixed(2));
        //Calculating Total Permeable Area m²
        const permeableResultTwo = parseInt(siteArea) - parseInt(floorArea) - parseInt(imperviousArea);
        setAreaPerm(permeableResultTwo.toFixed(2));
        //Calculating Total Permeable Area %
        const permeableResultPercent = (parseInt(floorArea) + parseInt(imperviousArea)) / parseInt(siteArea) * 100
        setPercentPerm(permeableResultPercent.toFixed(2));
    };

    return(
        <div>
            <h4 className="h5 dt-blue fw-900 pl-20">Permeable Surface</h4>
            <CardSmallalt>
                <table className="table-sm" onChange={PermeableHandler}>
                  <tbody>
                    <tr className="table-row">
                        <td><p className="body dt-gray">Site Area (m²)</p></td>
                        <td><input type="number" className="input-sm label " id="siteArea"/></td>
                    </tr>

                    <tr className="table-row">
                        <td><p className="body dt-gray">Floor Area (m²)</p></td>
                        <td><input type="number" className="input-sm label " id="floorArea"/></td>
                    </tr>

                    <tr className="table-row">
                        <td><p className="body dt-gray">Impervious Areas (m²)</p></td>
                        <td><input type="number" className="input-sm label" id="imperviousArea"/></td>
                    </tr>

                    <tr className="table-row">
                        <td><p className="body-bold dt-white fw-700">Total Impervious</p></td>
                        <td><h5 className="result-text_sm dt-blue ml-0 fw-700 text-center " id="permeableResultOne">{areaImperv}m²</h5></td>
                    </tr>

                    <tr className="table-row">
                        <td><p className="body-bold dt-white fw-700">Total Permeable</p></td>
                        <td><h5 className="result-text_sm dt-blue ml-0 fw-700 text-center " id="permeableResultTwo">{areaPerm}m²</h5></td>
                    </tr>

                    <tr className="table-row">
                        <td><p className="body-bold dt-white fw-700">Total Permeable</p></td>
                        <td><h5 className="result-text_sm dt-blue ml-0 fw-700 text-center " id="permeableResultThree">{percentPerm}%</h5></td>
                    </tr>
                  </tbody>
                </table>
            </CardSmallalt>
        </div>

    )
};

export default PermeableSurface;

