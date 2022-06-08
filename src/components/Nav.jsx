import React, {useState} from "react";
import NavItems from "./NavItems";
import './Nav.css';

import hamburger from "../assets/images/icons/hamburger.png"
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Help from "../pages/Help/Help";
import ScheduleMethod from "../pages/ScheduleMethod/ScheduleMethod";
import RiskMatrix from "../pages/RiskMatrix/RiskMatrix";
import WindZone from "../pages/WindZone/WindZone";
import Additional from "../pages/Additional/Additional";

const Nav = () => {

    const [wantHome, setWantHome] = useState(true);
    const [wantAbout, setWantAbout] = useState(false);
    const [wantHelp, setWantHelp] = useState(false);
    const [wantSchedule, setWantSchedule] = useState(false);
    const [wantMatrix, setWantMatrix] = useState(false);
    const [wantWind, setWantWind] = useState(false);
    const [wantAdditional, setWantAdditional] = useState(false);



    const clickHomeHandler = () => {
        setWantHome(true);
        setWantAbout(false);
        setWantHelp(false);
        setWantSchedule(false);
        setWantMatrix(false);
        setWantWind(false);
        setWantAdditional(false);
    }

    const clickAboutHandler = () => {
        setWantHome(false);
        setWantAbout(true);
        setWantHelp(false);
        setWantSchedule(false);
        setWantMatrix(false);
        setWantWind(false);
        setWantAdditional(false);
    }

    const clickHelpHandler = () => {
        setWantHome(false);
        setWantAbout(false);
        setWantHelp(true);
        setWantSchedule(false);
        setWantMatrix(false);
        setWantWind(false);
        setWantAdditional(false);
    }

    const clickScheduleHandler = () => {
        setWantHome(false);
        setWantAbout(false);
        setWantHelp(false);
        setWantSchedule(true);
        setWantMatrix(false);
        setWantWind(false);
        setWantAdditional(false);
    }

    const clickMatrixHandler = () => {
        setWantHome(false);
        setWantAbout(false);
        setWantHelp(false);
        setWantSchedule(false);
        setWantMatrix(true);
        setWantWind(false);
        setWantAdditional(false);
    }

    const clickWindHandler = () => {
        setWantHome(false);
        setWantAbout(false);
        setWantHelp(false);
        setWantSchedule(false);
        setWantMatrix(false);
        setWantWind(true);
        setWantAdditional(false);
    }

    const clickAdditionalHandler = () => {
        setWantHome(false);
        setWantAbout(false);
        setWantHelp(false);
        setWantSchedule(false);
        setWantMatrix(false);
        setWantWind(false);
        setWantAdditional(true);
    }

    return(
        <div className="container-entry">
                <header className="header flex-column">
                    <h3 className="nav__hero-text black">ARK SOLUTIONS</h3>
                    <NavItems 
                    home={clickHomeHandler}
                    about={clickAboutHandler} 
                    help={clickHelpHandler} 
                    schedule={clickScheduleHandler} 
                    matrix={clickMatrixHandler}
                    wind={clickWindHandler}
                    additional={clickAdditionalHandler}
                    />
                </header>
                {wantHome && <Home/>}
                {wantAbout && <About/>}
                {wantHelp && <Help/>}
                {wantSchedule && <ScheduleMethod/>}
                {wantMatrix && <RiskMatrix/>}
                {wantWind && <WindZone/>}
                {wantAdditional && <Additional/>}
        </div>


    )
};

export default Nav;