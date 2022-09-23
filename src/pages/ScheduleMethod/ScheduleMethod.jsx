import React, {useState} from "react";
import TBodyOne from "./TBodyOne";
import TBodyTwo from "./TBodyTwo";
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

const tableTwoData = [
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
    const [tableTwoRows, setTableTwoRows] = useState(tableTwoData);
    const [tableOneWindowArea, setTableOneWindowArea] = useState(0);
    const [tableTwoWindowArea, setTableTwoWindowArea] = useState(0);

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

    //--- TABLE ONE FUNCTIONS ---//
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


    //--- TALBE TWO FUNCTIONS ---//
    const addOneRowHandlerTwo = () => {
        const emptyRow = {
            id: Math.floor(Math.random() * 100000),
            joineryId: " ",
            height: 0,
            width: 0,
            area: 0
        };
        setTableTwoRows((prevRowsTwo) => {
            return [...prevRowsTwo, emptyRow]
        })
    }

    const removeRowOneHandlerTwo =() => {
        tableTwoRows.pop();
        setTableTwoRows((prevRowsTwo) => {
            return [...prevRowsTwo]
        })
    }

    const calcWindowAreasTwo = () => {
        let TableTwoAreaResult = 0;
        for(let currentRow of tableTwoRows){
            TableTwoAreaResult += currentRow.area
        }
        setTableTwoWindowArea(TableTwoAreaResult.toFixed(2));
    }

    const updateRowTwoHandler = (updatedRow) => {
        for(let row of tableTwoRows){
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

        let neswGlazingResult = parseInt(tableOneWindowArea) + parseInt(tableTwoWindowArea);
        setNeswGlazingArea(neswGlazingResult.toFixed(2));
        
        let neswResult = neswGlazingResult / neswWallAreaResult * 100;
        setNeswPercent(neswResult.toFixed(2));
    }

    return(
        <div className="container-lg flex-wrap">
            <h3 className="h2 dt-white fw-800">H1 Schedule Method</h3>
            <div className="container-sm">
                <h4 className="h5 dt-blue fw-800">General Info</h4>
                <CardSmall>
                    <table className="table-sm">
                        <tbody>
                            <tr className="table-row">
                                <td><p className="body dt-gray">Wall Height (m)</p></td>
                                <td><input type="number" className="input-sm label " onChange={wallheightHandler}/></td>
                            </tr>
                            <tr className="table-row">
                                <td><p className="body dt-gray">Total Perimeter (m)</p></td>
                                <td><input type="number" className="input-sm label " onChange={totalPerimHandler}/></td>
                            </tr>
                            <tr className="table-row">
                                <td><p className="body dt-gray">North Perimeter (m)</p></td>
                                <td><input type="number" className="input-sm label " onChange={northPerimHandler}/></td>
                            </tr>
                        </tbody>
                    </table>
                </CardSmall>
            </div>
            <div className="container-sm">
                <h4 className="h5 dt-blue fw-800">Means of compliance</h4>
                <CardSmall>
                    <p className="body dt-gray">
                    • A glazing area that is less than 30% of the total habitable wall area (m²) 
                    on the East, South, and West facing walls.</p>
                    <p className="body dt-gray">
                    • A glazing area that is less than 30% of the total habitable wall area (m²) 
                    on the North, East, South, and West facing walls.</p>
                    <p className="body dt-gray">
                    • Dwelling construction methods must comply with NZBC H1/AS1 to use the H1 
                    Schedule Method.</p>
                </CardSmall>
            </div>
            <div className="container-sm">
                <div className="flex-row">
                    <h4 className="h5 dt-blue fw-800">Windows ( E,S,W )</h4>
                    <div>
                        <img className="add-remove-icon" src={minus} onClick={removeRowOneHandler} alt="Remove"/>
                        <img className="add-remove-icon" src={add} onClick={addOneRowHandler} alt="Add"/>
                    </div>
                </div>
                <CardSmall>
                    <table className="table-sm">
                        <thead>
                            <tr>
                                <th><p className="label__window dt-gray fw-700">Joinery ID</p></th>
                                <th><p className="label__window dt-gray fw-700">Height</p></th>
                                <th><p className="label__window dt-gray fw-700">Width</p></th>
                                <th><p className="label__window dt-gray fw-700">Area</p></th>
                            </tr>
                        </thead>
                        <TBodyOne items={tableOneRows} onUpdateRowOne={updateRowOneHandler} />
                    </table>

                    <div className="container__window-area">
                        <p className="body dt-white fw-700">Total Area:</p>
                        <h5 className="result-text_md dt-blue ml-30">{tableOneWindowArea}</h5>
                    </div>
                    <div className="window-area__button">
                        <button onClick={calcWindowAreasOne} className="primary-button label">Calculate</button>
                    </div>
                </CardSmall>
            </div>
            <div className="container-sm">
                <div className="flex-row">
                <h4 className="h5 dt-blue fw-800">Windows ( N )</h4>
                    <div>
                        <img className="add-remove-icon" src={minus} onClick={removeRowOneHandlerTwo} alt="Remove"/>
                        <img className="add-remove-icon" src={add} onClick={addOneRowHandlerTwo} alt="Add"/>
                    </div>
                </div>
                <CardSmall>
                <table className="table-sm" id="table2">
                    <thead>
                        <tr className="table-row">
                            <th><p className="label__window dt-gray fw-700">Joinery ID</p></th>
                            <th><p className="label__window dt-gray fw-700">Height</p></th>
                            <th><p className="label__window dt-gray fw-700">Width</p></th>
                            <th><p className="label__window dt-gray fw-700">Area</p></th>
                        </tr>
                    </thead>
                    <TBodyTwo items={tableTwoRows} onUpdateRowTwo={updateRowTwoHandler} />
                </table>

                <div className="container__window-area">
                        <p className="body dt-white fw-700">Total Area:</p>
                        <h5 className="result-text_md dt-blue ml-30">{tableTwoWindowArea}</h5>
                    </div>
                    <div className="window-area__button">
                        <button onClick={calcWindowAreasTwo} className="primary-button label">Calculate</button>
                    </div>
                </CardSmall>
            </div>
            <div className="container-sm">
                <h4 className="h5 dt-blue fw-800">Results ( E,S,W )</h4>
                <CardSmall>
                    <table className="table-sm">
                        <tbody>
                            <tr className="table-row">
                                <td><p className="body dt-gray">Total Perimeter</p></td>
                                <td><h5 className="h5 dt-white fw-700">{eswPerim}m</h5></td>
                            </tr>
                            <tr className="table-row">
                                <td><p className="body dt-gray">Wall Area</p></td>
                                <td><h5 className="h5 dt-white fw-700">{eswWallArea}m²</h5></td>
                            </tr>
                            <tr className="table-row">
                                <td><p className="body dt-gray">Total Glazing Area</p></td>
                                <td><h5 className="h5 dt-white fw-700">{eswGlazingArea}m²</h5></td>
                            </tr>
                            <tr className="table-row">
                                <td><p className="body dt-gray dt-blue fw-700">Result</p></td>
                                <td><h5 className="result-text_md dt-blue ml-30 fw-700">{eswPercent}%</h5></td>
                            </tr>
                        </tbody>
                    </table>
                </CardSmall>
            </div>
            <div className="container-sm">
                <h4 className="h5 dt-blue fw-800">Results ( N,E,S,W )</h4>
                <CardSmall>
                    <table className="table-sm">
                        <tbody>
                            <tr className="table-row">
                                <td><p className="body dt-gray">Total Perimeter</p></td>
                                <td><h5 className="h5 dt-white fw-700">{neswPerim}m</h5></td>
                            </tr>
                            <tr className="table-row">
                                <td><p className="body dt-gray">Wall Area</p></td>
                                <td><h5 className="h5 dt-white fw-700">{neswWallArea}m²</h5></td>
                            </tr>
                            <tr className="table-row">
                                <td><p className="body dt-gray">Total Glazing Area</p></td>
                                <td><h5 className="h5 dt-white fw-700">{neswGlazingArea}m²</h5></td>
                            </tr>
                            <tr className="table-row">
                                <td><p className="body dt-blue fw-700">Result</p></td>
                                <td><h5 className="result-text_md dt-blue ml-30">{neswPercent}%</h5></td>
                            </tr>
                        </tbody>
                    </table>
                </CardSmall>
            </div>

            <div className="button-container">
                <button className="primary-button label" onClick={resultsHandler}>Calculate</button>
            </div>
        </div>
    )
};

export default ScheduleMethod;