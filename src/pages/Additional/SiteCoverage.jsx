import React, {useState} from "react";
import CardSmallalt from "../../components/CardSmallalt";

const SiteCoverage = () => {
    const [siteCoverage, setSiteCoverage] = useState(0);

    const siteCoverageHandler = () => {
        const netSiteArea = document.querySelector('#netSiteArea').value
        const siteCoverageArea = document.querySelector('#siteCoverageArea').value 
        //Site Coverage Calculation
        const siteCoverageCalculation = parseInt(siteCoverageArea) / parseInt(netSiteArea) * 100
        setSiteCoverage(siteCoverageCalculation.toFixed(2));
    }

    return(
        <div>
            <h4 className="h5 dt-blue fw-900 pl-20">Site Coverage</h4>
            <CardSmallalt>
            <table className="table-sm" onChange={siteCoverageHandler}>
                  <tbody>
                    <tr className="table-row">
                        <td><p className="body dt-gray">Gross Site Area (m²)</p></td>
                        <td><input type="number" className="input-sm label"/></td>
                    </tr>
                    <tr className="table-row">
                        <td><p className="body dt-gray">Net Site Area (m²)</p></td>
                        <td><input type="number" className="input-sm label " id="netSiteArea"/></td>
                    </tr>
                    <tr className="table-row">
                        <td><p className="body dt-gray">Site Coverage Area (m²)</p></td>
                        <td><input type="number" className="input-sm label" id="siteCoverageArea"/></td>
                    </tr>
                    <tr className="table-row">
                        <td><p className="body-bold dt-white fw-700">Site Coverage Area</p></td>
                        <td><h5 className="result-text_sm dt-blue ml-0 fw-700 text-center " id="siteCoverageResult">{siteCoverage}%</h5></td>
                    </tr>
                  </tbody>
                </table>
            </CardSmallalt>
        </div>
    )
};

export default SiteCoverage;

