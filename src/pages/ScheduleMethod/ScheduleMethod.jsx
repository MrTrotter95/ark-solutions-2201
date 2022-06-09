import React, {useState} from "react";
import TBodyOne from "./TBodyOne";
import CardSmall from "../../components/CardSmall";
import ClientInfo from "../../components/ClientInfo";
import './ScheduleMethod.css';

import minus from "../../assets/images/icons/remove.svg";
import add from "../../assets/images/icons/add.svg";

//I was Wanting to imitate saving the tables data to a "database"
const tableOneData = [
    {
        id: "01",
        joineryId: "EJ01",
        height: 0,
        width: 0,
        area: 0
    },
];

const ScheduleMethod = () => {
    const [tableOneRows, setTableOneRows] = useState(tableOneData);

    const addOneRowHandler = () => {
        setTableOneRows((prevRowsOne) => {
            return [...prevRowsOne, tableOneRows]
        })
    }

    const removeRowOneHandler =() => {
        setTableOneRows((prevRowsOne) => {
            return [...prevRowsOne.slice(1)]
        })
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
                                <td><input type="number" className="input-sm label " id=""/></td>
                            </tr>
                            <tr className="table-row">
                                <td><p className="body dark-gray">Total Perimeter (m)</p></td>
                                <td><input type="number" className="input-sm label " id=""/></td>
                            </tr>
                            <tr className="table-row">
                                <td><p className="body dark-gray">North Perimeter (m)</p></td>
                                <td><input type="number" className="input-sm label " id=""/></td>
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
                        <TBodyOne items={tableOneRows}/>
                    </table>
                    <div><p className="body bold dark-gray">Total Area:</p><h5 className="h5 light-blue"></h5></div>
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
                                <td><p className="body dark-gray">Total Perimeter (m)</p></td>
                                <td><input type="number" className="input-sm label " id=""/></td>
                            </tr>
                            <tr className="table-row">
                                <td><p className="body dark-gray">Wall Area (m²)</p></td>
                                <td><input type="number" className="input-sm label " id=""/></td>
                            </tr>
                            <tr className="table-row">
                                <td><p className="body dark-gray">Total Glazing Area (m²)</p></td>
                                <td><input type="number" className="input-sm label " id=""/></td>
                            </tr>
                            <tr className="table-row">
                                <td><p className="body bold dark-gray">Result</p></td>
                                <td><h5 className="h5 light-blue">24</h5></td>
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
                                <td><p className="body dark-gray">Total Perimeter (m)</p></td>
                                <td><input type="number" className="input-sm label " id=""/></td>
                            </tr>
                            <tr className="table-row">
                                <td><p className="body dark-gray">Wall Area (m²)</p></td>
                                <td><input type="number" className="input-sm label " id=""/></td>
                            </tr>
                            <tr className="table-row">
                                <td><p className="body dark-gray">Total Glazing Area (m²)</p></td>
                                <td><input type="number" className="input-sm label " id=""/></td>
                            </tr>
                            <tr className="table-row">
                                <td><p className="body bold dark-gray">Result</p></td>
                                <td><h5 className="h5 light-blue">24</h5></td>
                            </tr>
                        </tbody>
                    </table>
                </CardSmall>
            </div>

            <div className="button-container">
                <button className="primary-button label">Calculate</button>
                <button className="secondary-button label">Save To PDF</button>
            </div>
        </div>
    )
};

export default ScheduleMethod;