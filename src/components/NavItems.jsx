import React from "react";
import './Nav.css';

const NavItems = (props) => {

    const homeHandler = () => {
        props.home();
    }

    const aboutHandler = () => {
        props.about();
    }

    const helpHandler = () => {
        props.help();
    }

    const scheduleHandler = () => {
        props.schedule();
    }

    const matrixHandler = () => {
        props.matrix();
    }

    const windHandler = () => {
        props.wind();
    }

    const additionalHandler = () => {
        props.additional();
    }

    const councilHandler = () => {
        props.council();
    }

    return (
            <ul className="nav__ul black">
                <li className="nav__li" onClick={homeHandler}><a className="nav__item">HOME</a></li>
                <li className="nav__li" onClick={aboutHandler}><a className="nav__item">ABOUT</a></li>
                <li className="nav__li" onClick={helpHandler}><a className="nav__item">HELP</a></li>
                <li className="nav__li" onClick={scheduleHandler}><a className="nav__item">SCHEDULE METHOD</a></li>
                <li className="nav__li" onClick={matrixHandler}><a className="nav__item">RISK MATRIX</a></li>
                <li className="nav__li" onClick={windHandler}><a className="nav__item">WIND ZONE</a></li>
                <li className="nav__li" onClick={additionalHandler}><a className="nav__item">ADDITIONAL</a></li> 
                <li className="nav__li" onClick={councilHandler}><a className="nav__item">COUNCIL</a></li> 
            </ul>
    )
}

export default NavItems;