import React from "react";
import CardMedium from "./CardMedium";
import './ClientInfo.css';

const ClientInfo = () => {
    return(
        <div className="container-md">
            <h4 className="h5 fw-900 black">Client Info</h4>
            <CardMedium>
                <p className="label fw-800 input-label">Address</p>
                <input className="input-lg client-input__top label secondary-black" placeholder="Address.." type="text"/>
                <p className="label fw-800 secondary-black input-label ">Client</p>
                <input className="input-lg client-input__bottom label secondary-black" placeholder="Client.." type="text"/>
            </CardMedium>
        </div>
    )
};

export default ClientInfo;