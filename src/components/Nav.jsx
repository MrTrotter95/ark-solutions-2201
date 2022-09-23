import React, {useState} from "react";
import NavItems from "./NavItems";
import './Nav.css';

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import ScheduleMethod from "../pages/ScheduleMethod/ScheduleMethod";
import RiskMatrix from "../pages/RiskMatrix/RiskMatrix";
import WindZone from "../pages/WindZone/WindZone";
import Additional from "../pages/Additional/Additional";
import FixingTablePage from "../pages/FixingTables/FixingTablePage";
import Council from "../pages/Council/Council";

const Nav = () => {

    const [wantHome, setWantHome] = useState(true);
    const [wantAbout, setWantAbout] = useState(false);
    const [wantSchedule, setWantSchedule] = useState(false);
    const [wantMatrix, setWantMatrix] = useState(false);
    const [wantWind, setWantWind] = useState(false);
    const [wantAdditional, setWantAdditional] = useState(false);
    const [wantFixingTable, setWantFixingTable] = useState(false);
    const [wantCouncil, setWantCouncil] = useState(false);



    const clickHomeHandler = () => {
        setWantHome(true);
        setWantAbout(false);
        setWantSchedule(false);
        setWantMatrix(false);
        setWantWind(false);
        setWantAdditional(false);
        setWantFixingTable(false);
        setWantCouncil(false);
    }

    const clickAboutHandler = () => {
        setWantHome(false);
        setWantAbout(true);
        setWantSchedule(false);
        setWantMatrix(false);
        setWantWind(false);
        setWantAdditional(false);
        setWantFixingTable(false);
        setWantCouncil(false);
    }

    const clickHelpHandler = () => {
        setWantHome(false);
        setWantAbout(false);
        setWantSchedule(false);
        setWantMatrix(false);
        setWantWind(false);
        setWantAdditional(false);
        setWantFixingTable(false);
        setWantCouncil(false);
    }

    const clickScheduleHandler = () => {
        setWantHome(false);
        setWantAbout(false);
        setWantSchedule(true);
        setWantMatrix(false);
        setWantWind(false);
        setWantAdditional(false);
        setWantFixingTable(false);
        setWantCouncil(false);
    }

    const clickMatrixHandler = () => {
        setWantHome(false);
        setWantAbout(false);
        setWantSchedule(false);
        setWantMatrix(true);
        setWantWind(false);
        setWantAdditional(false);
        setWantFixingTable(false);
        setWantCouncil(false);
    }

    const clickWindHandler = () => {
        setWantHome(false);
        setWantAbout(false);
        setWantSchedule(false);
        setWantMatrix(false);
        setWantWind(true);
        setWantAdditional(false);
        setWantFixingTable(false);
        setWantCouncil(false);
    }

    const clickAdditionalHandler = () => {
        setWantHome(false);
        setWantAbout(false);
        setWantSchedule(false);
        setWantMatrix(false);
        setWantWind(false);
        setWantAdditional(true);
        setWantFixingTable(false);
        setWantCouncil(false);
    }

    const clickFixingTableHandler = () => {
        setWantHome(false);
        setWantAbout(false);
        setWantSchedule(false);
        setWantMatrix(false);
        setWantWind(false);
        setWantAdditional(false);
        setWantFixingTable(true);
        setWantCouncil(false);
    }

    const clickCouncilHandler = () => {
        setWantHome(false);
        setWantAbout(false);
        setWantSchedule(false);
        setWantMatrix(false);
        setWantWind(false);
        setWantAdditional(false);
        setWantFixingTable(false);
        setWantCouncil(true);
    }

    return(
        <div className="container-entry">
                <header className="header flex-column">
                    <h3 className="nav__hero-text">ARK SOLUTIONS</h3>
                    <NavItems 
                    home={clickHomeHandler}
                    about={clickAboutHandler} 
                    schedule={clickScheduleHandler} 
                    matrix={clickMatrixHandler}
                    wind={clickWindHandler}
                    additional={clickAdditionalHandler}
                    fixingTable={clickFixingTableHandler}
                    council={clickCouncilHandler}
                    />
                    <h5 className="mt-20 h4 warning">Warning: Site Is Not To Be Used For Commercial Use.</h5>
                </header>
                {wantHome && <Home/>}
                {wantAbout && <About/>}
                {wantSchedule && <ScheduleMethod/>}
                {wantMatrix && <RiskMatrix/>}
                {wantWind && <WindZone/>}
                {wantAdditional && <Additional/>}
                {wantFixingTable && <FixingTablePage/>}
                {wantCouncil && <Council/>}
        </div>


    )
};

export default Nav;