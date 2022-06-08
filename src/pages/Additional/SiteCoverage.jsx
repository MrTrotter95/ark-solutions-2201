import React, {useState} from "react";
import CardSmall from "../../components/CardSmall";

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
        <div className="container-sm">
            <h4 className="h4 secondary-black">Site Coverage</h4>
            <CardSmall>
            <table className="table-sm" onChange={siteCoverageHandler}>
                  <tbody>
                    <tr className="table-row">
                        <td><p className="body dark-gray">Gross Site Area (m²)</p></td>
                        <td><input type="number" className="input-sm label"/></td>
                    </tr>
                    <tr className="table-row">
                        <td><p className="body dark-gray">Net Site Area (m²)</p></td>
                        <td><input type="number" className="input-sm label " id="netSiteArea"/></td>
                    </tr>
                    <tr className="table-row">
                        <td><p className="body dark-gray">Site Coverage Area (m²)</p></td>
                        <td><input type="number" className="input-sm label" id="siteCoverageArea"/></td>
                    </tr>
                    <tr className="table-row">
                        <td><p className="body boldless">Site Coverage Area</p></td>
                        <td><h5 className="h5-0mg light-blue text-center " id="siteCoverageResult">{siteCoverage}%</h5></td>
                    </tr>
                  </tbody>
                </table>
            </CardSmall>
        </div>
    )
};

export default SiteCoverage;

