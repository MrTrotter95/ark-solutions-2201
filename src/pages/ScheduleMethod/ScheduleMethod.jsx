import React, {useState} from "react";
import TBodyOne from "./TBodyOne";
import CardSmall from "../../components/CardSmall";
import ClientInfo from "../../components/ClientInfo";
import './ScheduleMethod.css';

import minus from "../../assets/images/icons/remove.svg";
import add from "../../assets/images/icons/add.svg";

const tableOneData = [
    {
        id: 1,
        joineryId: "EJ01",
        height: 0,
        width: 0,
        area: 0
    }
];

const ScheduleMethod = () => {
    const [wallHeight, setWallheight] = useState(0);
    const [totalPerim, setTotalPerim] = useState(0);
    const [northPerim, setNorthPerim] = useState(0);
    const [tableOneRows, setTableOneRows] = useState(tableOneData);
    const [tableOneWindowArea, setTableOneWindowArea] = useState(0);

    //--- RESULTS E,S,W ---//
    const [eswPerim, setEswPerim] = useState(0);
    const [eswWallArea, setEswWallArea] = useState(0);
    const [eswGlazingArea, setEswGlazingArea] = useState(0);
    const [eswPercent, setEswPercent] = useState(0);

    //--- RESULTS N,E,S,W ---//
    const [neswPerim, setNeswPerim] = useState(0);
    const [neswWallArea, setNeswWallArea] = useState(0);
    const [neswGlazingArea, setNeswGlazingArea] = useState(0);
    const [neswPercent, setNeswPercent] = useState(0);

    const wallheightHandler = (event) => {
        setWallheight(event.target.value);
    }

    const totalPerimHandler = (event) => {
        setTotalPerim(event.target.value);
    }

    const northPerimHandler = (event) => {
        setNorthPerim(event.target.value);
    }

    const addOneRowHandler = () => {
        const emptyRow = {
            id: Math.floor(Math.random() * 100000),
            joineryId: " ",
            height: 0,
            width: 0,
            area: 0
        };
        setTableOneRows((prevRowsOne) => {
            return [...prevRowsOne, emptyRow]
        })
    }

    const removeRowOneHandler =() => {
        tableOneRows.pop();
        setTableOneRows((prevRowsOne) => {
            return [...prevRowsOne]
        })
    }

    const calcWindowAreasOne = () => {
        let TableOneAreaResult = 0;
        for(let currentRow of tableOneRows){
            TableOneAreaResult += currentRow.area
        }
        setTableOneWindowArea(TableOneAreaResult.toFixed(2));
    }

    const updateRowOneHandler = (updatedRow) => {
        for(let row of tableOneRows){
            if(row.id === updatedRow.id){
                row.joineryId = updatedRow.joineryId;
                row.height = updatedRow.height;
                row.width = updatedRow.width;
                row.area = updatedRow.area;
            }
        }
    }

    //--- RESULTS ---//
    const resultsHandler = () => {
        //--- WINDOWS E,S,W ---//
        let eswPerimResult = totalPerim - northPerim;
        setEswPerim(eswPerimResult.toFixed(2));

        let eswWallAreaResult = eswPerimResult * wallHeight;
        setEswWallArea(eswWallAreaResult.toFixed(2));

        setEswGlazingArea(tableOneWindowArea);

        let eswResult = tableOneWindowArea / eswWallAreaResult * 100;
        setEswPercent(eswResult.toFixed(2));


        //--- WINDOWS N,E,S,W ---//
        setNeswPerim(totalPerim);

        let neswWallAreaResult = totalPerim * wallHeight;
        setNeswWallArea(neswWallAreaResult.toFixed(2));
        
    }

    return(
        <div className="container-lg flex-wrap">
            <h3 className="h3">H1 Schedule Method</h3>
                <ClientInfo/>
            <div className="container-sm">
                <h4 className="h5 secondary-black">General Info</h4>
                <CardSmall>
                    <table className="table-sm">
                        <tbody>
                            <tr className="table-row">
                                <td><p className="body dark-gray">Wall Height (m)</p></td>
                                <td><input type="number" className="input-sm label " onChange={wallheightHandler}/></td>
                            </tr>
                            <tr className="table-row">
                                <td><p className="body dark-gray">Total Perimeter (m)</p></td>
                                <td><input type="number" className="input-sm label " onChange={totalPerimHandler}/></td>
                            </tr>
                            <tr className="table-row">
                                <td><p className="body dark-gray">North Perimeter (m)</p></td>
                                <td><input type="number" className="input-sm label " onChange={northPerimHandler}/></td>
                            </tr>
                        </tbody>
                    </table>
                </CardSmall>
            </div>
            <div className="container-sm">
                <h4 className="h5 secondary-black">Means of compliance</h4>
                <CardSmall>
                    <p className="body dark-gray">
                    • A glazing area that is less than 30% of the total habitable wall area(m²) 
                    on the East, South, and West facing walls.</p>
                    <p className="body dark-gray">
                    • A glazing area that is less than 30% of the total habitable wall area(m²) 
                    on the North, East, South, and West facing walls.</p>
                    <p className="body dark-gray">
                    • Dwelling construction methods must comply with NZBC H1/AS1 to use the H1 
                    Schedule Method.</p>
                </CardSmall>
            </div>
            <div className="container-sm">
                <div className="flex-row">
                    <h4 className="h5 secondary-black">Windows ( E,S,W )</h4>
                    <div>
                        <img className="add-remove-icon" src={minus} onClick={removeRowOneHandler} alt="Remove"/>
                        <img className="add-remove-icon" src={add} onClick={addOneRowHandler} alt="Add"/>
                    </div>
                </div>
                <CardSmall>
                    <table className="table-sm">
                        <thead>
                            <tr>
                                <th><p className="label__window boldless ">Joinery ID</p></th>
                                <th><p className="label__window boldless ">Height</p></th>
                                <th><p className="label__window boldless ">Width</p></th>
                                <th><p className="label__window boldless ">Area</p></th>
                            </tr>
                        </thead>
                        <TBodyOne items={tableOneRows} onUpdateRowOne={updateRowOneHandler} />
                    </table>

                    <div className="container__window-area">
                        <p className="body bold dark-gray">Total Area:</p>
                        <h5 className="h5 light-blue">{tableOneWindowArea}</h5>
                    </div>
                    <div className="window-area__button">
                        <button onClick={calcWindowAreasOne} className="primary-button label">Calculate</button>
                    </div>
                </CardSmall>
            </div>
            <div className="container-sm">
                <div className="flex-row">
                <h4 className="h5 secondary-black">Windows ( N )</h4>
                    <div>
                        <img className="add-remove-icon" src={minus} alt="Remove"/>
                        <img className="add-remove-icon" src={add} alt="Add"/>
                    </div>
                </div>
                <CardSmall>
                <table className="table-sm" id="table2">
                    <thead>
                        <tr className="table-row">
                            <th><p className="label__window boldless ">Joinery ID</p></th>
                            <th><p className="label__window boldless ">Height</p></th>
                            <th><p className="label__window boldless ">Width</p></th>
                            <th><p className="label__window boldless ">Area</p></th>
                        </tr>
                    </thead>
                    <tbody>
                       
                    </tbody>
                </table>
                </CardSmall>
            </div>
            <div className="container-sm">
                <h4 className="h5 secondary-black">Results ( E,S,W )</h4>
                <CardSmall>
                    <table className="table-sm">
                        <tbody>
                            <tr className="table-row">
                                <td><p className="body dark-gray">Total Perimeter</p></td>
                                <td><h5 className="h5 dark-gray">{eswPerim}m</h5></td>
                            </tr>
                            <tr className="table-row">
                                <td><p className="body dark-gray">Wall Area</p></td>
                                <td><h5 className="h5 dark-gray">{eswWallArea}m²</h5></td>
                            </tr>
                            <tr className="table-row">
                                <td><p className="body dark-gray">Total Glazing Area</p></td>
                                <td><h5 className="h5 dark-gray">{eswGlazingArea}m²</h5></td>
                            </tr>
                            <tr className="table-row">
                                <td><p className="body bold dark-gray">Result</p></td>
                                <td><h5 className="h5 light-blue">{eswPercent}%</h5></td>
                            </tr>
                        </tbody>
                    </table>
                </CardSmall>
            </div>
            <div className="container-sm">
                <h4 className="h5 secondary-black">Results ( N,E,S,W )</h4>
                <CardSmall>
                    <table className="table-sm">
                        <tbody>
                            <tr className="table-row">
                                <td><p className="body dark-gray">Total Perimeter</p></td>
                                <td><h5 className="h5 dark-gray">{neswPerim}m</h5></td>
                            </tr>
                            <tr className="table-row">
                                <td><p className="body dark-gray">Wall Area</p></td>
                                <td><h5 className="h5 dark-gray">{neswWallArea}m²</h5></td>
                            </tr>
                            <tr className="table-row">
                                <td><p className="body dark-gray">Total Glazing Area</p></td>
                                <td><h5 className="h5 dark-gray">{neswGlazingArea}m²</h5></td>
                            </tr>
                            <tr className="table-row">
                                <td><p className="body bold dark-gray">Result</p></td>
                                <td><h5 className="h5 light-blue">{neswPercent}%</h5></td>
                            </tr>
                        </tbody>
                    </table>
                </CardSmall>
            </div>

            <div className="button-container">
                <button className="primary-button label" onClick={resultsHandler}>Calculate</button>
                <button className="secondary-button label">Save To PDF</button>
            </div>
        </div>
    )
};

export default ScheduleMethod;